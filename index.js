const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
   cats.push("Ralph")
}

function destructivelyPrependCat() {
   cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
   cats.pop()
}

function destructivelyRemoveFirstCat() {
   cats.shift()
}

function appendCat(name) {
   return [...cats, name]
}

function prependCat(name) {
   return [name, ...cats]
}

function removeLastCat() {
   const newArray = cats.slice(0,cats.length - 1);
   return newArray;
 }

 function removeFirstCat() {
   const newArray = cats.slice(1);
   return newArray;
 }