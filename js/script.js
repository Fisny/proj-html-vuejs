new Vue({
    el: "#app",
    data: {
        text: "", //ricerca
        wishArray: [
            {
                immagine: "1a",
                tipo: "Fresh Fruits",
                nomeProdotto: "Mango Organic Fruit",
                prezzo: "€18.55 - €48.55",
            },
            {
                immagine: "2a",
                tipo: "Fresh Meat",
                nomeProdotto: "Meat Veal Orloff Beef Steak",
                prezzo: "€36.99 - €45.00",
            },
            {
                immagine: "4a",
                tipo: "Fresh Vegetables",
                nomeProdotto: "Chickpea Vegetable Legume Peas",
                prezzo: "€32.00",
            },
            {
                immagine: "5a",
                tipo: "Fresh Fruits",
                nomeProdotto: "Pomegranate Fruit Peach",
                prezzo: "€18.55 - €20.65",
            }
        ],
    },
    methods: {
        wishButton(elemento) {

            let blocco = { // c'è qualcosa di sbagliato
                immagine: elemento, 
                tipo: elemento, 
                nomeProdotto: elemento, 
                prezzo: elemento, 
            }
            console.log(blocco)
            this.wishArray.push(blocco)

            // se il blocco appare
            // bisogna far comparire una 
            // x al posto del pulsante wishlist
            // così eventualmente da rimuovere
            // l'oggetto con uno splice
            // come fare comparire la X???
        },
        cerca () {
            let testo = this.text
            console.log("hai cercato " + testo)
            let ricercaFiltrata = [];
            // for (let x = 0; x < wishArray.length; x++) {
            //     const elemento = wishArray[x];
            //     let titoloProdotto = elemento.includes(tipo, nomeProdotto);
            //     if (titoloProdotto === true) {
            //         ricercaFiltrata.push(elemento);
            //     }

            //     console.log("Guarda" + ricercaFiltrata)
                // blocco
                // il codice va in errore
            // }
        }
    },
})