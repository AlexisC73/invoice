export const calculateBasketTotal = (items: Product[]) => {
  return items.reduce(
    (acc, item) => acc + parseInt(item.unitPrice) * parseInt(item.quantity),
    0
  )
}
