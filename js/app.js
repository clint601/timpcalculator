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
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow= document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

// build cols and cards 
menuItems.forEach(item => {
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    card.innerHTML = `
    <img scr="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image
    card-image-top" />
    <div class="card-body">
    <h4 class="card-title text capitalize item-item">${item.item}</h4>
    <p class="card-text text-uppercase item-desc">${item.desc}</p>
    </div>
    <footer class="card-footer">
    <p class="card-text item-price">$${item.price}</p>
    <div class="buttons-div d-flex justify-content-around">
    <button
    class="btn btn-danger cart-btn text-capitalize"
    id="Btn${item.id}"
    data-id="${item.id}"
    data-price="${item.price}"
    data-qty="${item.qty}"
    data-item="${item.item}"
    >add to cart</button>
    <div class="qty-div">
    <button
    class="btn btn-primary btn-subtract"
    id="btnSubtract${item.id}"
    data-id="${item.id}"
    data-qty="${item.qty}"
    > - </button>
    <span class="quantity" id="quantity${item.id}">${item.qty}</span>
    <button
    class="btn btn-primary btn-add"
    id="btnAdd${item.id}"
    data-id="${item.id}"
    data-qty="${item.qty}"
    > + </button>
    </div>
    </footer>
    `
    

    column.appendChild(card)

    // switch (menuItems.type)
    switch (item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break
        case 'entrees':
            entreesRow.appendChild(column)
            break
        case 'drinks':
            drinksRow.appendChild(column)
            break
        case 'desserts':
            dessertsRow.appendChild(column)
            break
        case 'sides':
            sidesRow.appendChild(column)
            break
        default:
            console.log('Error: menu types not listed')
            break

    }
})

// cart buttons
const cartButtons = document.querySelectorAll('.cart-btn')

cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))

    button.addEventListener('click', ()=> {
        let qty
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].id === id ? qty = menuItems[i].qty : null
        }
        addItems(price, qty, item, id)
    })
})

// addItems()
let receiptArray = []

const addItems = (price , qty, item, id)=> {

    let itemObj = {
        id: id,
        item: item,
        qty: qty,
        price: price,
        itemTotal: qty * price
    }

    receiptArray = [...receiptArray, itemObj]

    // makeReceipt
    makeReceipt(itemObj, receipt)

    subtotal+= itemObj.itemTotal
    cartSubtotal.innerText = subtotal.toFixed(2)
}

// makeReceipt()
const makeReceipt = (obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-choice', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    receiptQty.setAttribute('id', 'qty${obj.id}')
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemsSubtotal)

    el.appendChild(tableRow)


}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener(button.getAttribute('data-id'))
    const spanQty = document.getElementById(`quantity${btnId}`)

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id === btnId && menuItems[i].qty > 0) {
            menuItems[i].qty-= 1
            spanQty.innerText = menuItems[i].qty
        }
    }
})

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {

    }
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].id === btnId
                && menuItems[i].qty < 20
                && cartButtons[i].CDATA_SECTION_NODE.id == btnId
            ) {

            }
        }
    )
})
