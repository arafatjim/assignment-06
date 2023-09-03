
const handleCategory =async () =>{
  const res= await  fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data= await res.json();
  
  
  const tabContainer=document.getElementById('tab-container');
  
  data.data.forEach(category => {
   const div=document.createElement('div');
   div.innerHTML=`
   <a onclick="handleLoadVideo('${category.category_id}')" id="tab" class="tab mx-auto w-24 bg-gray-200 hover:bg-red-500 block">${category.category}</a>
   `;
   
   
   tabContainer.appendChild(div);
   
  });
  
  
  console.log(data.data);
}
const handleLoadVideo = async (categoryId) =>{
   //console.log(categoryId);
   const res= await  fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
   const data= await res.json();
   
   const cardContainer=document.getElementById('card-container');
   cardContainer.innerHTML="";
   
   data.data.forEach((cards) => {
     const postedDate = cards.others?.posted_date;
     
     const hour = Math.floor(postedDate / 3600);
     const minute = Math.floor((postedDate % 3600) / 60);
     const second = postedDate % 60;
     console.log("posted date",postedDate)
            console.log(cards);
      const div=document.createElement('div');
      
      div.innerHTML=`
      <div class="card w-80 h-96 bg-base-100 shadow-xl ">
      <figure  class="relative h-56 rounded-t-sm pt-4"><img src="${cards?.thumbnail}" />
      <div class="absolute bottom-0 right-0  text-white p-2 text-sm mb-2 bg-orange-400 rounded-xl">
      <p class="w-40 text-">${hour} hours ${minute} minutes ${second} seconds ago</p>
     </div>
      </figure>
      
      <div class="card-body">
      
        
       <div class="flex gap-4 text-center">
       <img class="w-12 h-12 rounded-full" src="${cards.authors[0].profile_picture
       }">
       <h3 class="text-xl font-semibold pt-2">${cards.title}</h3>
       </div >
        <div class="flex gap-0">
        <p class="card-title text-gray-400">
          ${cards?.authors[0]?.profile_name}
        </p>
        
        <p>
        ${cards.authors[0]?.verified ? `<img class="w-6 h-6 rounded-full mt-2" src="./image/hd-logo.png" alt="">` : ''}
      </p>
        
        
        </div>
        
        <div class="card-actions justify-left">
          <div class=" badge-outline">${cards?.others?.views} <span>views</span> </div> 
         
        </div>
      </div>
    </div>
      `;
     
      cardContainer.appendChild(div);   
      //console.log(categoryId);
      

   })
   

  // console.log(data.data);
};
const handleModal=(data) =>{
const modalContainer=document.getElementById('modal-container');
if(data.data[0].length === 0){
 const div=document.createElement('div');
 div.innerHTML=`
 <dialog id="my_modal_2" class="modal">
     <form method="dialog" class="modal-box">
       <h3 class="font-bold text-lg">Hello!</h3>
       <p class="py-4">Press ESC key or click outside to close</p>
     </form>
     <form method="dialog" class="modal-backdrop">
       <button>close</button>
     </form>
   </dialog>
 `;
 modalContainer.appendChild(div);
}
}

handleCategory();
// const sortByViewButton = document.getElementById('sortBy-view');
// sortByViewButton.addEventListener('click', () => {
//   console.log(sortByViewButton);
//   handleLoadVideo(1000, 'views'); // Sort by views in ascending order
// });


handleLoadVideo(1000);
