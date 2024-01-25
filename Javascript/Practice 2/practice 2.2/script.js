class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  calculateCost() {
    return this.price * this.quantity;
  }
}
const product = new Product("Canvas", 100,2);
const totalCost = product.calculateCost();
console.log("Total cost of ",product.quantity,product.name,"is",totalCost);