console.log("hello from typescript file");

let inp= document.getElementById("inp") as HTMLInputElement;
// console.log(inp)
let btn = document.getElementById("btn") as HTMLButtonElement

function myFunc()  {
  const num: number = Number(inp.value)
  if (num % 2 === 0){
    alert("even number")
  }else{
    alert("odd number")
  }
}


btn.addEventListener("click", myFunc)

