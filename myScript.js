//creo l'id nel form su html che si chiama "formCustomizeTicket" per poi creare  addEventListener nel form
var formCustomizeTicket = document.getElementById("formCustomizeTicket");



//i form hanno un evento che si chiama submit. SUBMIT viene chiamato in causa quando l'utente o clicca sul pulsante invia  o schiaccia  sulla tastiera invio 
formCustomizeTicket.addEventListener("submit", function (event) {
    //però al click del form mi si ricarica la pagina e nn va bene! Per bloccare questo comportamento automatico di js c'è un METODO event.preventDefault
    event.preventDefault();

    //dove voglio che mi compaia il contenuto dell'input?
    var nomeCognomeUtenteElement = document.getElementById("nomeCognomeUtente");
    var prezzoBigliettoElement = document.getElementById("prezzoBiglietto");
    var codiceCPElement = document.getElementById("codiceCP");
    var codiceCarrozzaElement = document.getElementById("carrozza");
    var offertaElement = document.getElementById("offerta")

    
    // .currentTarger fa riferimento all'elemento che ha scatenato il mio submit, cioè fa riferimento al FORM  e nn al singolo input, perchè l'evento submit l'ho aggiunto sul form 
    var form = event.currentTarget;

    //per recuperare i singoli elementi html interni? --> utilizzo la proprietà form.Elements -->  mi ritorna una sotto-specie di array. form.Elements ci crea delle variabili con il nome che noi abbiamo assegnato a quel campo --> name: "kmDaPercorrere"...recupero quindi gli elementi (input)del form --> mi creo una variabile
    var formElements = form.elements

    //soluzione alternativa al posto di form.elements : posso usare quesySelector
    /*var nomeCognomeElement = document.querySelector("[name ='name_surname']");

    var tragittoElement = document.querySelector("[name ='kmDaPercorrere']");
    
    var nomeCognome = nomeCognomeElement.value;
    var tragittoKm = tragittoElement.value;
    */
    
    // con .value recupero quello che l'utente ha scritto nell'input
    var nomeCognome = formElements.name_surname.value;
    var tragittoKm = formElements.kmDaPercorrere.value;
    var fasciaEta = formElements.eta.value;

    //risultato del primo input
    nomeCognomeUtenteElement.innerHTML = nomeCognome;
    prezzoBigliettoElement.innerHTML = prezzoTicket(fasciaEta, tragittoKm);
    codiceCPElement.innerHTML = getRandomInt(90000, 99999);
    codiceCarrozzaElement.innerHTML = getRandomInt(1, 12);
    offertaElement.innerHTML = sconto(fasciaEta);



})

formCustomizeTicket.addEventListener("reset", function () {
    

    //dove voglio che mi compaia il contenuto dell'input?
    var nomeCognomeUtenteElement = document.getElementById("nomeCognomeUtente");
    var prezzoBigliettoElement = document.getElementById("prezzoBiglietto");
    var codiceCPElement = document.getElementById("codiceCP");
    var codiceCarrozzaElement = document.getElementById("carrozza");
    var offertaElement = document.getElementById("offerta")



    //risultato del primo input
    nomeCognomeUtenteElement.innerHTML = "";
    prezzoBigliettoElement.innerHTML = "";
    codiceCPElement.innerHTML = "";
    codiceCarrozzaElement.innerHTML = "";
    offertaElement.innerHTML = "";



})

//voglio una funzione che mi dia come risultato il prezzo del biglietto 
//se nell'input "km da percorrere" scrivo "20 km" mi esce il risultato NaN?

function prezzoTicket(anniUtente, numeroKmPercorsi) {
    var prezzoKm = 0.21;
    var esito;

    if (Number.isNaN(numeroKmPercorsi)) {
        alert("Il numero inserito non è valido");
        

    } else {
        // elaborazione input 
        
        var prezzoTotale = numeroKmPercorsi * prezzoKm;
        
        
        if (anniUtente === "over_65") {
            var scontoOver = (prezzoTotale / 100) * 40;
            
            esito = prezzoTotale - scontoOver;
            

        } else if (anniUtente === "minorenne") {
            var scontoJunior = (prezzoTotale / 100) * 20;
           
            esito = prezzoTotale - scontoJunior;
            
        } else {
            
            esito = prezzoTotale
        }
       
    }

    return esito.toFixed(2) + "€"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sconto(eta){
    
    switch(eta) {
        case "over_65": return "Sconto Over 65";
        case "minorenne": return "Sconto Minorenne";
        default: return "Nessuno sconto";
    } 

}