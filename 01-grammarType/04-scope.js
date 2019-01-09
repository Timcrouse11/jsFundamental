var x =12;

function scope() {
    var x = 33;
console.log(x);
}

// scope();
x = 33;
console.log(x)
console.log(x);




scope()