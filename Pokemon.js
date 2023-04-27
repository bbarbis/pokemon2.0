class Pokemon{
    constructor(adat, szuloElem){
        this.nev = adat.pokemonNev;
        this.kep = adat.eleresiut;
        szuloElem.append(`
        <div class="pokemon " style="absolute"> 
        <h3>${this.nev}</h3>
        <img src= '${this.kep}' alt='${this.nev}'>
        </div>
        `)
        this.pokeELEM=$(".pokemon:last-child");
        console.log(this,this.pokeELEM);
        $(window).on("keydown",(event)=>{
            //console.log(event.key)
            let bill = event.key;
            let poz= this.pokeELEM.position();
            console.log(poz);
            let xPoz, yPoz;
            switch(bill) {
                case "a":
                  console.log("bal");
                  xPoz = poz.left - 10 
                  this.pokeELEM.css("left", xPoz + "px");
                  break;
                case "f":
                    console.log("jobb");
                    xPoz = poz.left + 10 
                    this.pokeELEM.css("top", xPoz + "px");
                    break;
                case "s":
                  console.log("le");
                  yPoz = poz.left + 10 
                    this.pokeELEM.css("top", xPoz + "px");
                    break;
                  
                  case "d":
                    console.log("fel");
                    yPoz = poz.left - 10 
                    this.pokeELEM.css("top", xPoz + "px");
                
                  break;
                default:
                  // code block
              }
        })
    }
    
}

export default Pokemon;