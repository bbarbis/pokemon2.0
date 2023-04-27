export function adatBeolvas(vegpont) {
    //promisse
    fetch(vegpont, {
        method: "GET",
        
    })
        .then((response) => response.json())
        .then((data) => {
            adat = data;
            callback(lista);
            
        })
        .catch((error) => console.log(error));
}