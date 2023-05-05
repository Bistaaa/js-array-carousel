//selezioni gli elementi
const item = document.querySelectorAll(".image");
console.log(item);

//setto il primo item attivo
let activeItem = 0;

//seleziono freccia giù
const next = document.querySelector("#giu");
console.log(next);

//aggiungo il funzionamento al click della freccia giù
next.addEventListener("click",
    function () {

        //se non siamo all'ultimo elemento vai avanti
        if (activeItem < (item.length - 1)) {
           //togliamo la classe active
            item[activeItem].classList.remove("active");

            //passiamo all'elemento successivo
            activeItem++;
            console.log("nuovo valore dell'array: " + activeItem);

            //aggiungere la classe active al nuovo elemento
            item[activeItem].classList.add("active"); 

            //se sono all'ultimo elemanto faccio sparire la freccia
            if (activeItem === (item.length - 1)) {
                next.classList.add("hidden");
            };
        };
    }
);

//seleziono freccia su
const before = document.querySelector("#giu");
console.log(next);

//aggiungo il funzionamento al click della freccia su
before.addEventListener("click",
    function () {

        //se sono al primo elemento faccio sparire la freccia
        if (activeItem === (item.length - 5)) {
            before.classList.add("hidden");
        };

        //se non siamo al primo elemento vai avanti (torna indietro)
        if (activeItem > (item.length - 4)) {
           //togliamo la classe active
            item[activeItem].classList.remove("active");

            //passiamo all'elemento successivo
            activeItem++;
            console.log("nuovo valore dell'array: " + activeItem);

            //aggiungere la classe active al nuovo elemento
            item[activeItem].classList.add("active"); 

        };
    }
);