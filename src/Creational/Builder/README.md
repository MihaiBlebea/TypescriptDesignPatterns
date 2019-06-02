```
import { Director, Car, CarBuilder } from './Creational'

let director = new Director<Car>(new CarBuilder())

let cheapCar     = director.buildCheapCar('Dacia', 'Logan', 5, 4, 'diesel')
let expensiveCar = director.buildExpensiveCar('Mercedes', 'A342', 5, 4, 'petrol')

console.log(cheapCar)
console.log(expensiveCar)
```