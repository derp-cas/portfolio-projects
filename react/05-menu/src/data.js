const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Mojito Overkill",
        category: "drinks",
        price: 16.99,
        img: " data:image/jpeg;base64,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",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
export default menu;
