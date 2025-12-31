export type PaymentMethod = 'pix' | 'credit'

export interface Participant {
  id: string

  event_id: string

  name: string
  cpf: string
  birth_date: string   // ISO date (YYYY-MM-DD)
  whatsapp: string

  payment_method: PaymentMethod
  amount: number

  created_at: string   // ISO timestamp
  updated_at: string   // ISO timestamp
}
