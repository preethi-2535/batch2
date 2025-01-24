// let element = document.getElementById("demo");
// element.innerHTML = "DOM"
// console.log(element);

// let test = document.getElementById("test");
// test.innerHTML = "<h1>Header</h1>"
// console.log(test);


let ele = document.getElementsByClassName("test");
ele[0].style.backgroundColor = "doggerblue"
console.log(ele);
console.log(Array.isArray(ele));


let x = [...ele];
console.log(x, Array.isArray(x));
x.map(element=>{
    console.log(element);
    element.style.backgroundColor = "yellow";
    element.style.color = "tomato";
    element.style.textTransform = "uppercase";
})

let ele = document.queryselector(".test");
console.log(ele);

let ele = document.querySelector.SelectorAll(".test");
console.log(ele);
