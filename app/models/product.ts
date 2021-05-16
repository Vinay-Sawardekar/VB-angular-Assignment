export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id:number, name:string, description = '', price = 0, imageUrl = 'https://i.shgcdn.com/ded50c02-85f1-4c4c-9338-56e91df452a6/-/format/auto/-/preview/3000x3000/-/quality/lighter/') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
}
