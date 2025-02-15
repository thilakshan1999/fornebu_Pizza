import { Product } from "../model/product";

const DummyCategories = [
  "Internett deal",
  "Amerikansk Pizza",
  "Italiensk Pizza",
  "Kebab / Grill",
  "Middagsretter",
  "Crispy Fried Chicken",
  "Burger Retter",
  "Calzone",
  "Småretter",
  "Snacks",
  "Salat",
  "Barne Meny",
  "Ekstra Tilbehør",
  "Drikke",
];

const generateDummyProduct = (id, category) => {
  return new Product(
    id,
    `Product ${id}`,
    `This is the description for Product ${id} This is the description for Product 1 This is the description for This is the description for`,
    `Allergen info for Product ${id}`,
    2,
    Math.random() * 50 + 10, // Random amount between 10 and 60
    category,
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
        amount: Math.random() * 10,
      },
      {
        id: id + 102,
        name: `Extra ${id + 102}`,
        amount: Math.random() * 10,
      },
    ],
    [
      { name: "Dressing 1", amount: Math.random() * 3 },
      { name: "Dressing 2", amount: Math.random() * 3 },
    ],
    [
      {
        id: id + 200,
        name: `Drink ${id + 200}`,
        amount: Math.random() * 5,
      },
    ]
  );
};

const generateDummyData = () => {
  return DummyCategories.map((categoryName, index) => ({
    categoryId: index + 1,
    categoryName: categoryName,
    productList: Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
      (_, i) => generateDummyProduct(index * 10 + i + 1, categoryName)
    ),
  }));
};

const dummyData = generateDummyData();

export { dummyData, DummyCategories };
