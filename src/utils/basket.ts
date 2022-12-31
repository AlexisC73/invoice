export const calculateBasketTotal = (items: Product[]) => {
  return items.reduce(
    (acc, item) => acc + parseFloat(item.unitPrice) * parseFloat(item.quantity),
    0
  )
}
