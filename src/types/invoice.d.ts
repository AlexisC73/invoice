type Invoice = {
  id: number
  date: Date
  contact: string
  amount: number
  currency: string
  status: paidStatus
}

enum paidStatus {
  paid = 'paid',
  unpaid = 'unpaid',
  pending = 'pending',
  draft = 'draft',
}
