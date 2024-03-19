var userName = document.getElementById('username')
var userNameH4 = document.querySelector('#username h4')
var List1 = document.getElementById('list-1')
var List2 = document.getElementById('list-2')
var logout = document.getElementById('loguot')
var content = document.getElementById('all-products')
var cart = document.getElementById('cart')
var count = document.getElementById('count')
// var cartIcon = document.getElementById('cartIcon')
var searshCata = document.getElementById('ss')
var searshTit = document.getElementById('nn')






if(localStorage.getItem('firstName')){
  userName.style.display = 'block'
  List1.style.display = 'none'
  List2.style.display = 'block'
  userNameH4.innerHTML = `welcome ${localStorage.getItem('firstName')}`
}


logout.onclick = function () {
  localStorage.clear()
  setTimeout(() =>{
    window.location = 'signup.html'
  }, 1500)
}

// cartIcon.onclick = function() {
//     if(count.style.display == 'block'){
//         count.style.display = 'none'
//     }else{
//         count.style.display = 'block'
//     }
// }



var data = [
    {
        count : 0,
        id : 1,
        title : 'T-shirt adidas',
        price : 20,
        category : 'fashion',
        img : 'images/product1.jpg'
    },
    {
        count : 0,
        id : 2,
        title : 'earpods',
        price : 60,
        category : 'Phone accessories',
        img : 'images/product2.jpg'
    },
    {
        count : 0,
        id : 3,
        title : 'Jacket',
        price : 120,
        category : 'fashion',
        img : 'images/product3.jpg'
    },
    {
        count : 0,
        id : 4,
        title : 'Adidas bottle',
        price : 40,
        category : 'fashion',
        img : 'images/product4.jpg'
    },
    {
        count : 0,
        id : 5,
        title : 'Glasses',
        price : 60,
        category : 'Men accessories',
        img : 'images/product5.jpg'
    },
    {
        count : 0,
        id : 6,
        title : 'Cap',
        price : 20,
        category : 'Men accessories',
        img : 'images/product6.jpg'
    },
    {
        count : 0,
        id : 7,
        title : 'Bag adidas',
        price : 110,
        category : 'Bags',
        img : 'images/product7.jpg'
    },
    {
        count : 0,
        id : 8,
        title : 'Shoes adidas',
        price : 80,
        category : 'sport',
        img : 'images/product8.jpg'
    },
    {
        count : 0,
        id : 9,
        title : 'Bag',
        price : 90,
        category : 'fashion',
        img : 'images/product9.png'
    },
]








function Draw(array) {
    var x =  array.map((item) => {
        return `
       <div class="col">
       <div class="card mx-auto my-3" style="width: 18rem;">
         <img src=${item.img} class="card-img-top" alt="..." style="height: 380px;">
         <div class="card-body">
           <h5 class="card-title" style="color: #0d6efd;"> Product :${item.title}</h5>
           <h6 class="card-title"> Category : ${item.category}</h6>
           <h6 class="card-title"> Price : ${item.price}$</h6>
           <button id='btn${item.id}' class="btn" onclick=addToCart(${item.id}) style="background-color: #0d6efd; color:white;font-weight:bold;display:block;">Add To Cart</button>
           <button id='ptn${item.id}' class="btn btn-success" style="display:none;">Added To Cart</button>
         </div> 
       </div>
      </div>
       `
        
      })
      content.innerHTML = x

}

Draw(data)

searshCata.onchange = function (e) {
    if(searshCata.value == ''){
       Draw(data)
    }else{
        newData =  data.filter((item) => {
            return item.category == e.target.value
         })
         Draw(newData)
    }
    // console.log(e.target.value);
 }

 searshTit.onchange = function (e) {
    if(searshTit.value == ''){
       Draw(data)
    }else{
        newData =  data.filter((item) => {
            return item.title == e.target.value
         })
         Draw(newData)
    }
    console.log(e.target.value);
 }

var totalPrice = localStorage.getItem('Price') ? +(localStorage.getItem('Price')) : 0
var myProducts = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []


if(localStorage.getItem('Products')){
    myProducts.map((e) => {
        cart.innerHTML += `<li><button class="dropdown-item" style="color: #0d6efd;" type="button">${e.title}</button></li>`
    })
}
myProducts.map((item) => {
    var btn1 = document.getElementById(`btn${item.id}`)
    var btn2 = document.getElementById(`ptn${item.id}`)


        btn1.style.display =  'none'
        btn2.style.display =  'block'
})

count.innerHTML = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')).length : 0
count.style.display = localStorage.getItem('Products') ? 'block' : 'none'
function addToCart (id) {

    if(localStorage.getItem('firstName')){

        var product = data.find((e) => {
            return e.id === id
        })
    
      
            cart.innerHTML += `<li><button class="dropdown-item" style="color: #0d6efd;" type="button">${product.title}</button></li>`
            count.style.display = 'block'
        
        
        
        
            totalPrice += +(product.price)
            localStorage.setItem('Price' , totalPrice)
            myProducts = [...myProducts , product]
            count.innerHTML = myProducts.length
            localStorage.setItem('Products',JSON.stringify(myProducts))
            var countProduct = ++product.count
            localStorage.setItem(`Count${product.id}` , countProduct) 
            
            
    
            console.log(localStorage.getItem('Block'));
    
        
            var btn1 = document.getElementById(`btn${product.id}`)
            var btn2 = document.getElementById(`ptn${product.id}`)
        
    
                btn1.style.display =  'none'
                btn2.style.display =  'block'
            
        
    }else{
        alert('you should register in this web site')
    }
   

}
