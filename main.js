const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 
const shoppingCarButton = document.querySelector('.navbar-shopping-cart');
const shoppingCarAside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const closeProductDetail = document.querySelector('.product-detail-close')
const productDetail = document.querySelector('.product-detail-secondary')
const darkness = document.querySelector('.darkBackground');


emailMenu.addEventListener('click', toggleDesktopMenu);
mobileMenuButton.addEventListener('click', toggleMobileMenu);
shoppingCarButton.addEventListener('click', toggleShoppingCarAside);
closeProductDetail.addEventListener('click', closeAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    shoppingCarAside.classList.add('inactive');
    productDetail.classList.add('inactive')
}


function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCarAside.classList.add('inactive')
    productDetail.classList.add('inactive')
}

function toggleShoppingCarAside() {
    shoppingCarAside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive')
    darkness.classList.toggle('inactive')
}

function openProductDetail() {
    productDetail.classList.remove('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCarAside.classList.add('inactive')
    darkness.classList.remove('inactive')
}

function closeAside() {
    productDetail.classList.add('inactive')
    darkness.classList.add('inactive')
}

const productList = []; 
productList.push({
    name: "Red Velvet cupcake",
    price: 7000,
    image: './assets/imagenes/IMG_9778.JPG' 
})
productList.push({
    name: "Red Velvet cake",
    price: 30000,
    image: './assets/imagenes/IMG_9790.JPG' 
})
productList.push({
    name: "Chocolate cake",
    price: 30000,
    image: './assets/imagenes/IMG_0019.JPG' 
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetail)
    
        const productInfoContainer = document.createElement('div')
        productInfoContainer.classList.add('product-info')
    
        
        const productInfoP = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        productInfoP.appendChild(productPrice);
        productInfoP.appendChild(productName)
        
        const productFigure = document.createElement('figure')
        const cartFigure = document.createElement('img')
        cartFigure.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
        
        productFigure.appendChild(cartFigure);
        
        productInfoContainer.appendChild(productInfoP);
        productInfoContainer.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfoContainer)
    
        cardsContainer.appendChild(productCard)
        
    }
}

renderProducts(productList);