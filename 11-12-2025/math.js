function add() {
    let a = Number(prompt("Enter value of a:"));
    let b = Number(prompt("Enter value of b:"));

    let r = a + b;
    console.log("Result:", r);
    alert("Result: " + r);
}

function subtract() {
    let a = Number(prompt("Enter value of a:"));
    let b = Number(prompt("Enter value of b:"));

    let r = a - b;
    console.log("Result:", r);
    alert("Result: " + r);
}

export { add, subtract };
