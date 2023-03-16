// function showAlert(){
//     alert('alert btn clicked')
// }
// function showConfirm(){
//   const confimation=  confirm('tk de');
  
//   if(confimation==true){
//     alert('jaan')
//   }
//   else{
//     alert('vaag')
//   }
// }
// function showPrompt(){
//    const name= prompt('name ki?');
//    if(name=='adiba'){
//     alert('welcome')
//    }
//    else{
//     alert('name thik nai')
//    }
// }
// const hello=localStorage.getItem('hello')
// console.log('hello')

// function showValue(){
//     localStorage.setItem('age',30)
// }
function add(){
    const addProduct=document.getElementById('addProduct');
    const addQuantity=document.getElementById('addQuantity');
    const productValue=addProduct.value;
    const quantityValue=addQuantity.value;
    console.log(productValue,quantityValue);
    showProduct(productValue,quantityValue);
    saveProductInLocalStorage(productValue,quantityValue)
}
function showProduct(product,quantity){
    const container=document.getElementById('container');
    const li=document.createElement('li');
    li.innerText=`${product} ${quantity}`;
    container.appendChild(li)
}
// local storage thk data pauar jnno.jodi thke taile seta parse kore dibe.noeto empty object dibe
const getStoredProductFromLocalStorage=()=>{
    let cart={};
    const savedCart=localStorage.getItem('cart');
    if(savedCart){
        cart=JSON.parse(savedCart);
    }
    return cart;
}
// local storage new product add korar jnno.stringify kore add korte hbe.
const saveProductInLocalStorage=(product,quantity)=>{
const cart=getStoredProductFromLocalStorage();
cart[product]=quantity;
const cartStringified=JSON.stringify(cart);
localStorage.setItem('cart',cartStringified);
}
// load korleu jate porduct gulo ul te thke sejnno local storage thk data gulo nia segulo display kora
// const displayProductFromLocalStorage=()=>{
//     const cart=getStoredProductFromLocalStorage();
//     console.log(cart);
//     for(const singleProduct in cart){
//         const quantity=cart[singleProduct];
//         console.log(singleProduct,quantity);
//         showProduct(singleProduct,quantity);
//     }
// }
// displayProductFromLocalStorage();
let count=0;
const clickBtn=()=>{
    count=count+1;
showValue(count);
storeDataInLocalStorage('count',count)
}
const showValue=(count)=>{
    const pTag=document.getElementById('pTag');
    pTag.innerText=count;
}
const getDataFromLC=()=>{
    let cart={};
    const savedCart=localStorage.getItem('count');
    if(savedCart){
        cart=JSON.parse(savedCart);
    }
    return cart;
}
const storeDataInLocalStorage=(count,value)=>{
const cart=getDataFromLC();
console.log(cart);
cart[count]=value;
const cartStringified=JSON.stringify(cart);
localStorage.setItem('count',cartStringified)
}
const displayDataFromLocalStorage=()=>{
    const cart=getDataFromLC();
    console.log(cart)
    for(const currentValue in cart){
        count=cart[currentValue];
        console.log('count',count);
        showValue(count);
    }

}
displayDataFromLocalStorage()