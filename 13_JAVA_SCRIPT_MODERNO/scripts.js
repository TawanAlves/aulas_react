// 1- var, let, const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 0) {
  let a = 5;
  console.log(a);
}
console.log(a);

function logName() {
  const name = "Tawan";
  console.log(name);
}

const name = "Pedro";
logName();
console.log(name);

//2- Arrow Function
const sum = function sum(a, b) {
  return a + b;
};
console.log(sum(5, 5));

const arrowSum = (a, b) => a + b;

console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Olá " + name + " !";
  } else {
    return "Olá";
  }
};

console.log(greeting("Tawan"));
console.log(greeting());

const testeArrow = () => console.log("Testou!");

testeArrow();

const user = {
  name: "Tawan",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

// user.sayUserName();
// user.sayUserNameArrow();

// 3- Filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});
console.log(arr);
console.log(highNumbers);

const users = [
  { name: "Tawan", available: true },
  { name: "Pedro", available: false },
  { name: "Matheus", available: false },
  { name: "José", available: true },
]

const availableUsers = users.filter((user) => user.available)
// return implícito

const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

// 4 map
const products = [
  {name: 'Camisa', price:10.99, category:'Roupas'},
  {name: 'Calça Jeans', price:60, category:'Roupas'},
  {name: 'Fogão', price:400, category:'Eletro'},
  {name: 'Geladeiraa', price:850, category:'Eletro'},
]

products.map((product) => {
  if(product.category === 'Roupas'){
    product.onSale = true
  }
})
console.log(products)

//5- Template Literals

const userName = 'Tawan'
const age = 80

console.log(`o nome é ${userName} e tem ${age} anos.`)

// 6- Destructuring
const fruits = ['Maçã', 'Laranja', 'Mamão']
const [f1, f2, f3] = fruits
console.log(f1)
console.log(f3)

const productDetails = {
  name: "Teris",
  price: 19.99,
  category: "Mate",
}

const {name: productName, price, category: productCategory} = productDetails

console.log(`o nome do produto é ${productName}, custa R$${price} tem categoria ${productCategory}`)

// 4- Spread Operator
const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [...a1, ...a2,]
console.log(a3)

const a4 = [0, ...a1, 4]
console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 1000, price: 4900, wheels: 4}

const car = {...carName, ...carBrand, ...otherInfos }
console.log(car)

//8- Classes
 class Product{
  constructor(name, price){
  this.name = name
  this.price = price
}
  productWithDiscount(discount){
    return this.price * ((100 - discount) / 100)
  }
 }

const shirt = new Product("Camisa gola V", 20)
console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(20))

const tenis = new Product("Tenis Verde", 120)
console.log(tenis.name)
console.log(tenis.productWithDiscount(10))
console.log(tenis.productWithDiscount(20))

// 9- Herança
class ProductWithAttributes extends Product{
  constructor(name, price, colors){
    super(name, price)
    this.colors = colors
  }
  showColors(){
    console.log("As cores são:")
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}
const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)
console.log(hat.productWithDiscount(30))                              
hat.showColors()