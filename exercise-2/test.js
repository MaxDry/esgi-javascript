var foo = 1;
const foobar = 10;

if (true) {
    var foo = 2;
    


}

function hola() {
    return foo;
}

console.log(hola());
console.log(foo);
console.log(foobar);