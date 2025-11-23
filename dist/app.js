console.log("hello from typescript file");
let inp = document.getElementById("inp");
// console.log(inp)
let btn = document.getElementById("btn");
function myFunc() {
    const num = Number(inp.value);
    if (num % 2 === 0) {
        alert("even number");
    }
    else {
        alert("odd number");
    }
}
btn.addEventListener("click", myFunc);
export {};
//# sourceMappingURL=app.js.map