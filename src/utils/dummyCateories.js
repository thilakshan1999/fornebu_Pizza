import { Product } from "../model/product";

const DummyCategories = [
  { id: 1, name: "Internett deal" },
  { id: 2, name: "Amerikansk Pizza" },
  { id: 3, name: "Italiensk Pizza" },
  { id: 4, name: "Kebab / Grill" },
  { id: 5, name: "Middagsretter" },
  { id: 6, name: "Crispy Fried Chicken" },
  { id: 7, name: "Burger Retter" },
  { id: 8, name: "Calzone" },
  { id: 9, name: "Småretter" },
  { id: 10, name: "Snacks" },
  { id: 11, name: "Salat" },
  { id: 12, name: "Barne Meny" },
  { id: 13, name: "Ekstra Tilbehør" },
  { id: 14, name: "Drikke" },
];

export default DummyCategories;

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
  return DummyCategories.map((category, index) => ({
    categoryId: index + 1,
    categoryName: category.name,
    productList: Array.from(
      { length: Math.floor(Math.random() * 5) + 1 },
      (_, i) => generateDummyProduct(index * 10 + i + 1, category)
    ),
  }));
};

const dummyData = generateDummyData();

export { dummyData, DummyCategories };
