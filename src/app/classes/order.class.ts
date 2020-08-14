export class Order {
  constructor(
    public id: string,
    public timestamp: string,
    public total: string,
    public customer: string,
    public items: Array<string>
  ) {}
}
