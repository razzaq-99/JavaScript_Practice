// onsole.log("Hello World!");
//          alert("me");  
//          console.warn("This is warning");
//          console.error("this is error");


// var num1 = 34;
// var num2 = 34;
// document.write(num1+num2);
// console.log(num1+num2);

// var str = "this is string ";
// var str2 = "this is string too";

// console.log(str);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// var arr = [1,2,3,4,5];



// function avg(a,b){
//     return (a+b)/2;
// }
// c1 = avg(12,6);
// c2= avg (14,12);
// console.log(c1,c2);



// var age = 20;
// if(age>12){
//     console.log("you are not a kid ");
// }
// else
//      console.log("You are a kid now");


// var age = 32;
// if(age>38){
//     console.log("you are not a kid");
// }

// else if(age>32){
//     console.log("you are too old");
// }

// else if(age==32){
//     console.log("You are able to join for election:")
// }

// else 
//    console.log("not valid:");



// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// let myarr = ['ali',12,null,true];
// myarr.pop();
// myarr.push('razzaq');
// myarr.shift();
// myarr.unshift('qq');
// myarr.sort();

// console.log(myarr);


// let str = "I am a good boy and she is good too."
// console.log(str);
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.lastIndexOf("good"));

// console.log(str.slice(1,11));


// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());
// console.log(mydate.getDay());



// DOM MANIPULATION
let elem = document.getElementById('click');
// console.log(elem);
let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);

elemclass[1].style.background = "yellow";
elemclass[1].style.border = "2px solid black";

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[1].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText="this is a created element";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText="this is a created bold element";
// tn[0].replaceChild(createdElement2,createdElement);


// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>We are clicked </b>"
//    console.log("Button was clicked:");
// }
// )
// firstContainer.addEventListener('mouseover',function(){
//     console.log("MouseOver was clicked:");
//  }
//  )
//  firstContainer.addEventListener('mouseout',function(){
//     console.log("MouseOut was clicked:");
//  }
//  )

// firstContainer.addEventListener('mousedown',function(){
//         console.log("Mousedown was clicked:");
//      }
//      )



// Arrow function
//  function sum(a,b){
//     return a+b;
//  }

//  sum = (a,b)=>{
//    return a+b;
//  }

// setTimeOut and setinterval --> scheduling a function
// logkaro = ()=>{
//     console.log("i am your log");
// }
// setTimeout(logkaro,2000);
// setInterval(logkaro,2000);
// clr = setInterval(logkaro,2000);


// localStorage.getItem('name','abdul')
// null
// localStorage
// localStorage.setItem('name','abdul')
// undefined
// localStorage
// Storage {name: 'abdul', length: 1}name: "abdul"length: 1[[Prototype]]: Storage
// localStorage.getItem('name')
// 'abdul'
// localStorage.removeItem('name');
// localStorage.clear();


// JSON 
// obj = {name:"abdul",length:1}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// console.log(typeof obj);


