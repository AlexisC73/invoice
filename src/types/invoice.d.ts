type Invoice = {
  id: string
  date: string
  dueDate: string
  description: string
  currency: string
  status: string
  contact: string
  sender: Adress
  buyer: {
    name: string
    address: Adress
  }
  items: Product[]
}

type Adress = {
  street: string
  city: string
  zip: string
  country: string
  state: string
}

type Product = {
  id: string
  name: string
  quantity: string
  unitPrice: string
  description: string
}
