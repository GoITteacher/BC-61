/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(newItem) {
    this.items.push(newItem);
  },

  remove(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        this.items.splice(i, 1);
        break;
      }
    }
  },

  clear() {
    this.items = [];
  },

  getTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.amount;
    }
    return total;
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.amount += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName && item.amount > 1) {
        item.amount -= 1;
      }
    }
  },
};

cart.add({ name: '🍎', price: 50, amount: 3 });
cart.add({ name: '🍋', price: 60, amount: 2 });
cart.add({ name: '🍓', price: 110, amount: 20 });

cart.remove('1');
console.log(cart.getItems());
// console.log(cart.getTotalPrice());
