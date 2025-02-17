class CartItem {
  constructor(
    id,
    productId,
    productName,
    productBasePrize,
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
    this.productBasePrize = productBasePrize;
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
