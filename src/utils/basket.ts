export const calculateBasketTotal = (items: Product[]) => {
  return items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0)
}
