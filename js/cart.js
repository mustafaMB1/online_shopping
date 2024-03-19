var Products = JSON.parse(localStorage.getItem('Products'))
var content = document.getElementById('all-products')
var Price = document.getElementById('price')



  
  


function Draw () {
  var x = Products.map((item) => {
    var count = localStorage.getItem(`Count${item.id}`)
    return `
    <div class="card mb-3 mx-auto p-0 rounded" style="max-width: 70%; width : 470px">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${item.img} class="img-fluid rounded-start" style='height:100%'>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style="color: #0d6efd;">TITLE: ${item.title}</h5>
        <p class="card-text"><b>CATEGORY:</b> ${item.category}</p>
        <p class="card-text"><small class="text-muted"><b>PRICE:</b> ${item.price}$</small></p>
        <div style="display:flex ; justify-content:space-between; align-items:center">
          <span style="font-size:20px; font-weight:bold;"><span id="counter${item.id}">${count}</span>  <button style='color:#00f100;cursor:pointer;    border: none;
          background-color: white;' onclick=Plus(${item.id})>+</button>  <button id='minus' style='color:red;cursor:pointer;    border: none;
          background-color: white;' onclick=Minus(${item.id})>-</button></span>           
        </div>
      </div>
    </div>
  </div>
</div>
    `
  })

  content.innerHTML = x
}
Draw()

/////////////////////////////////////////////////
  Price.innerHTML = 'Total Price: ' + localStorage.getItem('Price') + '$'



  function Plus (id) {
    var product = Products.find((e) => {
      return e.id === id
    })

    var oldPrice = +(localStorage.getItem('Price'))
    oldPrice += +(product.price)
    localStorage.setItem('Price' , oldPrice)
    Price.innerHTML = 'Total Price: ' + localStorage.getItem('Price') + '$'

    var count = localStorage.getItem(`Count${product.id}`)
    var newCount = ++count
    localStorage.setItem(`Count${product.id}` , newCount)
    Draw()
  }



  /////////////////////////////////
  function Minus(id) {


    var counter = document.getElementById(`counter${id}`)
    
    if(+(counter.innerHTML) >= 2){
      var product = Products.find((e) => {
        return e.id === id
      })
  
      var oldPrice = +(localStorage.getItem('Price'))
      oldPrice -= +(product.price)
      localStorage.setItem('Price' , oldPrice)
      Price.innerHTML = 'Total Price: ' + localStorage.getItem('Price') + '$'
  

      var count = localStorage.getItem(`Count${product.id}`)
      var newCount = --count
      localStorage.setItem(`Count${product.id}` , newCount)
      Draw()
    }else{
      var product = Products.find((e) => {
        return e.id === id
      })
      var index = Products.map((item) => {
        return item.id
      }).indexOf(id)

      var oldPrice = +(localStorage.getItem('Price'))
      oldPrice -= +(product.price)
      localStorage.setItem('Price' , oldPrice)
      Price.innerHTML = 'Total Price: ' + localStorage.getItem('Price') + '$'
  

      var count = localStorage.getItem(`Count${product.id}`)
      var newCount = --count
      localStorage.setItem(`Count${product.id}` , newCount)

      Products.splice(index,1)
      localStorage.setItem('Products' , JSON.stringify(Products))
      console.log(localStorage.getItem('Products'));
      Draw()
    }
  }



