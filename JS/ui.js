export class Displayall {
    Display (name) {
        let cartona ='';
        for (let index = 0; index < name.length; index++) {
        cartona += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div data-id="${name[index].id}" class="mb-xl-3 mb-md-2 mb-sm-4 selectid  ">
                            <div class=" hiver overflow-hidden "> 
                                <div class="p-3  photo ">
                                    <img src="${name[index].thumbnail}" width="100%" alt="">
                                </div>
                                <div class="caption flex-shrink-1 flex-grow-1 d-flex flex-wrap align-items-center justify-content-between">
                                <h3 class="m-0 ps-2 text-light ">${name[index].title}</h3>
                                <div class="pe-2 "><span class="p-1 text-light rounded-3">Free</span></div>
                                <p class="w-100 mt-3 mb-3 text-center ">${name[index].short_description.split(" ",8)}</p>
                                    <div class="footer-c mt-2 px-3 py-2 d-flex flex-grow-1 justify-content-between">
                                        <span class="text-light p-1 rounded-3">${name[index].publisher.split(" ", 1)}</span>
                                        <span class="text-light p-1 rounded-3">${name[index].platform}</span>
                                    </div>
                                </div>
                           </div>
                        </div> 
                    </div>
                      `;
                     document.getElementById("games").innerHTML = cartona
     }
     }
     Displaydet (namedet) {
        let cartonad='';
        cartonad += ` <div class="col-md-4  p-2" >
                        <div>
                            <img src="${namedet.thumbnail}" width="100%" alt="">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="caption-s2">
                            <h3 class="text-light p-2">Title : ${namedet.title}</h3>
                            <p class="text-light p-2">Category : <span> ${namedet.genre}</span></p>
                            <p class="text-light p-2">Platform : <span>${namedet.platform}</span></p>
                            <p class="text-light p-2">Status : <span>${namedet.status}</span></p>
                            <p class="text-light px-2 py-4 cp">${namedet.description}</p>
                            <a href="${namedet.game_url}" target="_blank" class="btn btn-outline-warning text-light">Show Game</a>
                        </div>
                    </div> `;
                     document.getElementById("thedetails").innerHTML = cartonad
     }
}