// Access DOM Elements
const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// set subtotal & tax
let subtotal = 0 
let tax = .07

// grab the menu types
const menuTypes = [
    'appetizers',
    'entrees',
    'drinks',
    'desserts',
    'sides'
]

// create menu items; array of objects
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread and toast',
        imgUrl: '',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'onion rings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: '',
        price: '',
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'cheeses stick',
        desc: 'deep fried cheeses ',
        imgUrl: '',
        price: '4.99',
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: ' hot wings',
        desc: ' fry wings with buffalo sauce',
        imgUrl: '',
        price: '12.99',
        qty: 0
    },
    {
        id: 1,
        type: 'entrees',
        item: 'hamburgers',
        desc: 'fresh grill beef',
        imgUrl: '',
        price: '20.99',
        qty: 0
    },
    {
        
        id: 2,
        type: 'entrees',
        item: 'grill chicken',
        desc: 'off the grill chicken that still be dry',
        imgUrl: '',
        price: '40.99',
        qty: 0
    },
    {
        id: 3,
        type: 'entrees',
        item: 'pizza',
        desc: 'hot and ready pizza just like your mate',
        imgUrl: '',
        price: '5.99',
        qty: 0
    },
    {
        id: 4,
        type: 'entrees',
        item: 'pork bbq ribs',
        desc: 'ribs so good you going to want to rub it on your momma back',
        imgUrl: '',
        price: '60.99',
        qty: 0
    },
    {
        id: 1,
        type: 'drinks',
        item: 'coke',
        desc: 'ice cold drink that make you want to try the real thang',
        imgUrl: '',
        price: '1.99',
        qty: 0
    },
    {
        id: 2,
        type: 'drinks',
        item: 'sprite',
        desc: 'lemon lime drink with burn acid',
        imgUrl: '',
        price: '1.99',
        qty: 0
    },
    {
        id: 3,
        type: 'drinks',
        item: 'red wine',
        desc: 'sweet drink that have you to miss him',
        imgUrl: '',
        price: '15.99',
        qty: 0
    },
    {
        id: 4,
        type: 'drinks',
        item: 'water',
        desc: 'plain like my ex',
        imgUrl: '',
        price: '15.99',
        qty: 0
    },
    {
        id: 1,
        type: 'desserts',
        item: 'chocolet cake',
        desc: 'fresh bake double chocolet cake that built like my ex ',
        imgUrl: '',
        price: '25.99',
        qty: 0
    },
    {
        id: 2,
        type: 'desserts',
        item: 'chocolet chip cookie',
        desc: 'fresh bake thick cookie with extra chocolet...I should call her ',
        imgUrl: '',
        price: '2.99',
        qty: 0
    },
    {
        id: 3,
        type: 'desserts',
        item: 'vanilla ice cream',
        desc: 'cold just like your ex who left for chocolet',
        imgUrl: '',
        price: '1.99',
        qty: 0
    },
    {
        id: 4,
        type: 'vanilla and chocolet cookie',
        item: '',
        desc: 'when she like both',
        imgUrl: '',
        price: '8.99',
        qty: 0
    },
    {
        id: 1,
        type: 'sides',
        item: 'french frys',
        desc: '',
        imgUrl: '',
        price: '60.99',
        qty: 0
    },
    {
        id: 2,
        type: 'sides',
        item: 'corn',
        desc: '',
        imgUrl: '',
        price: '10.99',
        qty: 0
    },
    {
        id: 3,
        type: 'sides',
        item: 'macaroni and cheese',
        desc: '',
        imgUrl: '',
        price: '25.99',
        qty: 0
    },
    {
        id: 4,
        type: 'sides',
        item: 'broccoli',
        desc: '',
        imgUrl: '',
        price: '6.99',
        qty: 0
    }
]

// confirm button
confirmBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('click')
})

// load the menu items
// make rows
menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')

    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for (let i = 0; i < menuTypes.length; i++) {
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    console.log(menuDivs[i])
}
// grap the appRow
const appRow = Document.getElementById('appetizersRow')
const entreesRow = Document.getElementById('entreesRow')
const drinksRow= Document.getElementById('drinksRow')
const dessertsRow = Document.getElementById('dessertsRow')
const sidesRow = Document.getElementById('sidesRow')

// build cols and cards 
menuItems.forEach(item => {
    const colum = document.createElement('div')
    colum.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
    <img scr="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image
    card-image-top" />
    <div class="card-body">
    <h4 class="card-title text capitalize item-item">${item.item}</h4>
    <p class="card-text text-uppercase item-desc">${item.desc}</p>
    </div>
    `
})
