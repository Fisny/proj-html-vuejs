new Vue({
    el: "#app",
    data: {
        wishArray: [
            {
                immagine: "1a.jpg",
                tipo: "Fresh Fruits",
                nomeProdotto: "Mango Organic Fruit",
                prezzo: "€18.55 - €48.55",
            },
            {
                immagine: "2a.jpg",
                tipo: "Fresh Meat",
                nomeProdotto: "Meat Veal Orloff Beef Steak",
                prezzo: "€36.99 - €45.00",
            },
            {
                immagine: "4a.jpg",
                tipo: "Fresh Vegetables",
                nomeProdotto: "Chickpea Vegetable Legume Peas",
                prezzo: "€32.00",
            },
            {
                immagine: "5a.jpg",
                tipo: "Fresh Fruits",
                nomeProdotto: "Pomegranate Fruit Peach",
                prezzo: "€18.55 - €20.65",
            }
        ],
    },
    methods: {
        wishButton(pulsante) {
            let blocco = {
                immagine: pulsante,
                tipo: pulsante,
                nomeProdotto: pulsante,
                prezzo: pulsante,
            }
            console.log(blocco)
            this.wishArray.push(blocco)
        }
    },
})