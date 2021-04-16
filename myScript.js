/*calcolo del prezzo del biglietto del treno con form

Partendo dall'esercizio del biglietto, aggiungiamo la parte visiva come da screenshot

Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form*/



//creo l'id nel form su html che si chiama "formCustomizeTicket" per poi creare  addEventListener nel form
var formCustomizeTicket = document.getElementById("formCustomizeTicket");

//i form hanno un evento che si chiama submit. SUBMIT viene chiamato in causa quando l'utente o clicca sul pulsante invia  o schiaccia  sulla tastiera invio 



formCustomizeTicket.addEventListener("submit", function (event) {
    //però al click del form mi si ricarica la pagina e nn va bene! Per bloccare questo comportamento automatico di js c'è un METODO event.preventDefault
    event.preventDefault();

    //dove voglio che mi compaia il contenuto dell'input?
    var nomeCognomeUtenteElement = document.getElementById("nomeCognomeUtente");


    //recuperare gli elementi input 

    // .currentTarger fa riferimento all'elemento che ha scatenato il mio submit, cioè fa riferimento al FORM  e nn al singolo input, perchè l'evento submit l'ho aggiunto sul form 
    var form = event.currentTarget;

    //come faccio a recuperare i singoli elementi html interni?

    //utilizzo la proprietà form.Elements
    //form.Elements mi ritorna una sotto-specie di array 
    //posso utilizzare un ciclo per recuperare gli elementi (che sono i miei input)

    //form.Elements ci crea delle variabili con il nome che noi abbiamo assegnato a quel campo --> name: "kmDaPercorrere"...

    //recupero quindi gli elementi (input)del form --> mi creo una variabile
    var formElements = form.elements

    //al posto di form.elements posso usare
    
    /*var nomeCognomeElement = document.querySelector("[name ='name_surname']");

    var tragittoElement = document.querySelector("[name ='kmDaPercorrere']");
    
    var nomeCognome = nomeCognomeElement.value;
    var tragittoKm = tragittoElement.value;
    */

    
    // con .value recupero quello che l'utente ha scritto nell'input
    var nomeCognome = formElements.name_surname.value;
    var tragittoKm = formElements.kmDaPercorrere.value;
    var fasciaEta = formElements.età.value;

    //risultato del primo input
    nomeCognomeUtenteElement.innerHTML = nomeCognome;
    
    console.log("submit");
})

