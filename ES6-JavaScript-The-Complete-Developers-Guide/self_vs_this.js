https://stackoverflow.com/questions/962033/what-underlies-this-javascript-idiom-var-self-this

As others have explained, var self = this; allows code in a closure to refer back to the parent scope.

However, it's now 2018 and ES6 is widely supported by all major web browsers. The var self = this; idiom isn't quite as essential as it once was.

It's now possible to avoid var self = this; through the use of arrow functions.

In instances where we would have used var self = this:

function test() {
    var self = this;
    this.hello = "world";
    document.getElementById("test_btn").addEventListener("click", function() {
        console.log(self.hello); // logs "world"
    });
};
We can now use an arrow function without var self = this:

function test() {
    this.hello = "world";
    document.getElementById("test_btn").addEventListener("click", () => {
        console.log(this.hello); // logs "world"
    });
};
Arrow functions do not have their own this and simply assume the enclosing scope.