import { dett } from "./details.js";
import {Displayall} from "./ui.js";
export class games{
    constructor(){
		this.gamecat("mmorpg")
        document.querySelectorAll(".catagory-select a").forEach((ggg) => {
            ggg.addEventListener("click", (r)=>{
                document.querySelector(".catagory-select .active").classList.remove("active")
                r.target.classList.add("active");
                this.gamecat(r.currentTarget.id)
            })
        });
        this.Displayall = new Displayall();
	}
     async gamecat(ddd) {
        const loadd = document.querySelector(".load");
        loadd.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a182dcbbc8mshd4c46a1d1d6331bp1abd0ajsne0d5462c1c9e',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${ddd}`,options)
        const resp = await api.json();
        this.Displayall.Display(resp);
        this.getid()
        loadd.classList.add('d-none')
    }
    getid(){
        const loadd = document.querySelector(".load");
        loadd.classList.remove('d-none')
        document.querySelectorAll(".selectid").forEach ((idgame) => {
            idgame.addEventListener("click" , () => {
                const hh = idgame.dataset.id;
                this.details2(hh);
                loadd.classList.add('d-none')  
            });
        });
    }
    details2(id3){
        const loadd = document.querySelector(".load");
        const det2 = new dett(id3);
        loadd.classList.remove('d-none')
        document.querySelector('.game').classList.add('d-none')
        document.querySelector('.details').classList.remove('d-none')
        loadd.classList.add('d-none')
    }
}





