class Product {
  constructor(
    id,
    name,
    description,
    allerg,
    stock,
    amount,
    category,
    img,
    selectOption,
    deselectOption,
    extra,
    extraDressing,
    addDrink
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.allerg = allerg;
    this.stock = stock;
    this.amount = amount;
    this.category = category;
    this.img = img;
    this.selectOption = selectOption;
    this.deselectOption = deselectOption;
    this.extra = extra;
    this.extraDressing = extraDressing;
    this.addDrink = addDrink;
  }
}

const generateDummyProduct = (id) => {
  return new Product(
    id,
    `Product ${id}`,
    `This is the description for Product ${id} This is the description for Product 1 This is the description for This is the description for`,
    `Allergen info for Product ${id}`,
    2,
    Math.random() * 50 + 10, // Random amount between 10 and 60
    `Category ${Math.floor(Math.random() * 5) + 1}`,
    `https://techserw.s3.us-west-2.amazonaws.com/Flutter/OKD/Apple2.jpg`,
    [
      { name: "Option 1", price: 1 },
      { name: "Option 2", price: 2 },
    ],
    ["No Cheese", "No Sauce"],
    [
      {
        id: id + 100,
        name: `Extra ${id + 100}`,
        amount: (Math.random() * 10).toFixed(2),
      },
    ],
    [
      { name: "Dressing 1", price: (Math.random() * 3).toFixed(2) },
      { name: "Dressing 2", price: (Math.random() * 3).toFixed(2) },
    ],
    [
      {
        id: id + 200,
        name: `Drink ${id + 200}`,
        amount: (Math.random() * 5).toFixed(2),
      },
    ]
  );
};

const generateDummyProducts = (count) => {
  return Array.from({ length: count }, (_, index) =>
    generateDummyProduct(index + 1)
  );
};

const dummyProducts = generateDummyProducts(10);

export { dummyProducts, Product };
