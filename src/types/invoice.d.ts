type Invoice = {
  id: string
  date: string
  dueDate: string
  description: string
  currency: string
  status: string
  contact: string
  sender: Adress
  owner: string
  buyer: {
    name: string
    address: Adress
  }
  products: Product[]
}

type Adress = {
  street: string
  city: string
  zip: string
  country: string
}

type Product = {
  id: string
  name: string
  quantity: string
  unitPrice: string
  description: string
}
