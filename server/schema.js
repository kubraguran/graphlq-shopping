import { createSchema } from 'graphql-yoga'
import { prices, products,home, random } from '../server/data.js'

export const schema = createSchema({
 typeDefs:`
type Random {
   id:ID,
   image:String,
   desc:String
}
 type Home {
    id:ID,
    image:String,
    desc:String,
 }
 type Products {
    title:String,
    id:ID,
    image:String
    desc:String,
    prices:Prices,
    prices_id:String

 }
 type Prices{
    id:ID,
    currency:String,
    prices:Float,
    products:Products,
 }
 type Query {
 random:[Random] 
 home: Home   
 products: [Products],
 product(id:ID): Products
 prices: [Prices]

 }
 `,
 resolvers: {
 Query: {
 products :() => products,
 product: (parent,args) => {
    const data = products.find((product) => product.id === args.id);
    return data;
 },
 prices: () => prices,
 home:() => home,
 random:() => random,
 },
 
Products: {
    prices: (parent,args) => {
    return prices.find((price) => price.id === parent.prices_id);
    }
},
 }
})
