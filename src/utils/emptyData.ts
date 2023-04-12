export const emptyInvoice = {
  buyer: {
    address: {
      city: '',
      country: '',
      street: '',
      zip: '',
    },
    name: '',
  },
  contact: '',
  currency: 'usd',
  date: new Date(Date.now()).toISOString(),
  description: '',
  dueDate: new Date(Date.now()).toISOString(),
  owner: '',
  id: '',
  products: [],
  sender: {
    city: '',
    country: '',
    street: '',
    zip: '',
  },
  status: 'pending',
}

export const emptyItem: Omit<Product, 'id'> = {
  description: '',
  name: '',
  quantity: '',
  unitPrice: '',
}
