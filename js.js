/* function first() {
setTimeout(function(){
    console.log(1);
}, 500 );
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log("Я учу" + lang);
    callback();
}

function done() {
    console.log("я прошел 3 урок")
}

learnJS("JavaScript", done); */


let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    background: "red"
};

delete options.bool;

console.log(options);

for(let key in options) {
    console.log('свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);