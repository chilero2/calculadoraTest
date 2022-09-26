const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if (b=== 0) throw "No se puede divir entre 2";
    else return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide    
};
