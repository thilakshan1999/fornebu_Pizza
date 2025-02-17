class CartItem {
  constructor(
    id,
    productId,
    productName,
    productOnlyPrize,
    productUnitPrize,
    quantity,
    note,
    select,
    deselectIngredients,
    extras,
    extraDressings,
    addDrinks
  ) {
    this.id = id;
    this.productId = productId;
    this.productName = productName;
    this.productOnlyPrize = productOnlyPrize;
    this.productUnitPrize = productUnitPrize;
    this.quantity = quantity;
    this.note = note;
    this.select = select;
    this.deselectIngredients = deselectIngredients;
    this.extras = extras;
    this.extraDressings = extraDressings;
    this.addDrinks = addDrinks;
  }
}

export default CartItem;
