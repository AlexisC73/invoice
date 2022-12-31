export const emptyInvoice = {
  buyer: {
    address: {
      city: '',
      country: '',
      state: '',
      street: '',
      zip: '',
    },
    name: '',
  },
  contact: '',
  currency: 'usd',
  date: '',
  description: '',
  dueDate: '',
  id: '',
  items: [],
  sender: {
    city: '',
    country: '',
    state: '',
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
