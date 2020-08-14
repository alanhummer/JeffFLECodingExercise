export interface Order {
  id: string,
  timestamp: string,
  total: string,
  customer: string,
  items: Array<string>
}
