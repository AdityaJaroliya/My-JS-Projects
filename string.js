const arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr);

const myarr=[{name:"aditya kumar" , email:"aditya@gmail.com" },{name:"mukul", email:"mukul@gmail.com" },{name:"rishabh", email:"rishabh@gmail.com"}]




// const ans = arr.filter((num)=> {

//     return num>4;
// });
// const ans=myarr.filter((data)=>data.name==="aditya kumar");


// chaining using more method in sequence;
// const ans2=arr.map((data)=> data+10).map((data)=>data+3).filter((data)=>data>=20);
// console.log(ans2);

const ans=arr.reduce((acc,data)=>acc+data, 0);
console.log(ans);



