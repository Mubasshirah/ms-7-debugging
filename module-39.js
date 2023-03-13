// function one(){
//     console.log('one');
//     setTimeout(()=>{
//         console.log('two')
//     },2000)
    
//     console.log('three');
// }

// one()

// const getData=new Promise((resolve,reject)=>{
    
//     const num=Math.random()*10;
//     console.log(num)
//     if(num<6){
//         resolve('less than')
//     }
//     else{
//         reject('greater than')
//     }
// })
// getData
// .then(data=>console.log(data+'double double'))
// .catch(error=>console.error("error",error));
// let num=0;
// const intervalId=setInterval(()=>{
//     num++
//     console.log(num);

// if(num===10){
//     clearInterval(intervalId)
// }
// },1000)fun
// let intervalId;
// function startBtn(){
//     const countStart=document.getElementById('count');
  
//     let num=0;
//  intervalId=setInterval(()=>{
//         num++;
//         console.log(num);
//         countStart.innerText=num;


//     },1000);
    
// }
// function stopBtn(){

//     clearInterval(intervalId)

// }; 
// function reset(){
//     const countStart=document.getElementById('count');
//     countStart.innerText=0;
//     clearInterval(intervalId);
// }

// function a(){
//     console.log('a')
//     b();
//     console.log('aaa')
// }
// function b(){
//     console.log('b')
//     c();
//     console.log('bb')
// }
// setTimeout(()=>{
//     console.log('set time out');
// },2000)
// function c(){
//     console.log('c')
// }
// a()

// console.log(1111)
// console.log(bbaria);
// try{
// }
// catch(err){
//     console.log('err:',err);
// }
// console.log(22222)


// let num=19;
// try{
    
//     if(num!=18){
//         throw "18 likho"
//     }
// }
// catch(err){
//     console.log('err:',err);
// }
// finally{
//     console.log('all done')
// }
function foo(){
    return foo();
}
foo()