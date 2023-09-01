
const handleCategory =async () =>{
         const res= await  fetch('https://openapi.programming-hero.com/api/videos/categories');
         const data= await res.json();
         console.log(data);
         const tabContainer=document.getElementById('tab-container');
         data.data.forEach(category => {
          const div=document.createElement('div');
          div.innerHTML=`
          <a onclick="handleLoadVideo('${category.category_id}')" id="tab" class="tab mx-2 bg-gray-200 hover:bg-red-500 block">${category.category}</a>
          `;
          
          tabContainer.appendChild(div);
          
         });
         
         
         console.log(data.data);
}
const handleLoadVideo = async (categoryId) =>{
          console.log(categoryId);
          const res= await  fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
          const data= await res.json();
          const cardContainer=document.getElementById('card-container');
          cardContainer.innerHTML="";
          data.data.forEach((cards) => {
                    console.log(cards);
             const div=document.createElement('div');
             div.innerHTML=`
             <div class="card w-80 h-96 bg-base-100 shadow-xl ">
             <figure  class="h-60"><img src="${cards?.thumbnail}" />
             
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
               <p>${cards.authors?.bluetic}</p>
               </div>
               
               <div class="card-actions justify-left">
                 <div class=" badge-outline">${cards?.others?.views} <span>views</span> </div> 
                
               </div>
             </div>
           </div>
             `;
             cardContainer.appendChild(div);   
             console.log(categoryId);

          })
          
//           if(categoryId == 0){
// //                     const div=document.createElement('tabConatiner');
// //                     div.innerHTML=`
// //                     button class="btn" onclick="my_modal_2.showModal()">open modal</button>
// //                     <dialog id="my_modal_2" class="modal">
// //                     <form method="dialog" class="modal-box">
// //     <h3 class="font-bold text-lg">Hello!</h3>
// //     <p class="py-4">Press ESC key or click outside to close</p>
// //   </form>
// //   <form method="dialog" class="modal-backdrop">
// //     <button>close</button>
// //   </form>
// // </dialog>
//                     `
//           }
          console.log(data.data);
};

handleCategory();

function blogBtn(target){
          console.log(li)
}
handleLoadVideo(1000);