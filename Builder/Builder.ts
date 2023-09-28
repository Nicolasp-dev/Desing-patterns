// Example 1
class Pizza {
  constructor(
    public size: string,
    public cheese: boolean,
    public pepperoni: boolean,
    public mushrooms: boolean,
    public bacon: boolean
  ) {}
}

class PizzaBuilder {
  private size: string = "Medium";
  private cheese: boolean = false;
  private pepperoni: boolean = false;
  private mushrooms: boolean = false;
  private bacon: boolean = false;

  constructor(size: string) {
    this.size = size;
  }

  addCheese(): PizzaBuilder {
    this.cheese = true;
    return this;
  }

  addPepperoni(): PizzaBuilder {
    this.pepperoni = true;
    return this;
  }

  addMushrooms(): PizzaBuilder {
    this.mushrooms = true;
    return this;
  }

  addBacon(): PizzaBuilder {
    this.bacon = true;
    return this;
  }

  build(): Pizza {
    return new Pizza(this.size, this.cheese, this.pepperoni, this.mushrooms, this.bacon);
  }
}

// Using the Builder
const pizza = new PizzaBuilder("Large").addCheese().addPepperoni().addMushrooms().build();

console.log(pizza);
// {
//   "size": "Large",
//   "cheese": true,
//   "pepperoni": true,
//   "mushrooms": true,
//   "bacon": false
// }

// Example 2

class OrderItem {
  constructor(public name: string, public quantity: number) {}
}

class ShippingAddress {
  constructor(public street: string, public city: string, public zipCode: string) {}
}

class Order {
  constructor(
    public orderItems: OrderItem[],
    public shippingAddress: ShippingAddress,
    public isExpressShipping: boolean = false
  ) {}
}

class OrderBuilder {
  private orderItems: OrderItem[] = [];
  private shippingAddress: ShippingAddress = new ShippingAddress("", "", "");
  private isExpressShipping: boolean = false;

  addItem(name: string, quantity: number): OrderBuilder {
    this.orderItems.push(new OrderItem(name, quantity));
    return this;
  }

  setShippingAddress(street: string, city: string, zipCode: string): OrderBuilder {
    this.shippingAddress = new ShippingAddress(street, city, zipCode);
    return this;
  }

  useExpressShipping(): OrderBuilder {
    this.isExpressShipping = true;
    return this;
  }

  build(): Order {
    return new Order(this.orderItems, this.shippingAddress, this.isExpressShipping);
  }
}

// Using the Builder to create an Order
const order = new OrderBuilder()
  .addItem("Product A", 2)
  .addItem("Product B", 1)
  .setShippingAddress("123 Main St", "Cityville", "12345")
  .useExpressShipping()
  .build();

console.log(order);
// {
//   "orderItems": [
//     {
//       "name": "Product A",
//       "quantity": 2
//     },
//     {
//       "name": "Product B",
//       "quantity": 1
//     }
//   ],
//   "shippingAddress": {
//     "street": "123 Main St",
//     "city": "Cityville",
//     "zipCode": "12345"
//   },
//   "isExpressShipping": true
// }
