new Vue({
    el: "#app",
    data: {
        text: "",
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
        },
        cerca () {
            let testo = this.text
            console.log("hai cercato " + testo)
        }
    },
})