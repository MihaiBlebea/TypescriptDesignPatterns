```
import { Client, VictorianFurnitureFactory, ModernFurnitureFactory } from './Creational'

let victorianFactory       = new VictorianFurnitureFactory()
let modernFurnitureFactory = new ModernFurnitureFactory()

let client = new Client(victorianFactory)

let furniture = client.createFurniture('chair')
console.log(furniture.sitOn())
```