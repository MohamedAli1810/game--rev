import { Displayall } from "./ui.js";
export class dett{
	constructor(id2){
		const loaddet = document.querySelector(".load");
		loaddet.classList.remove("d-none");
		 this.Displayall = new Displayall();
		    document.querySelector('.btn-Close1').addEventListener("click",()=>{
			document.querySelector('#game').classList.remove('d-none')
			document.querySelector('#details').classList.add('d-none')
		});
		this.gamedetails(id2);
		loaddet.classList.add("d-none");
	}
	   gamedetails(idd) {		
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': 'a182dcbbc8mshd4c46a1d1d6331bp1abd0ajsne0d5462c1c9e',
				'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
         fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idd}`,options)
		.then((resp) => resp.json())
		.then((resp) => this.Displayall.Displaydet(resp));
	}
}