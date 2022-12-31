export const calculateBasketTotal = (items: Product[]) => {
  return parseFloat(
    items
      .reduce(
        (acc, item) =>
          acc + parseFloat(item.unitPrice) * parseFloat(item.quantity),
        0
      )
      .toFixed(2)
  )
}
