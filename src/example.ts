import { RobotDog, HealthyEat, LoudBark } from './Behaviour'

let dog = new RobotDog(new HealthyEat(80, 5, 40), new LoudBark('loud'))

dog.bark()

// import { Client, VictorianFurnitureFactory, ModernFurnitureFactory } from './Creational'

// let victorianFactory       = new VictorianFurnitureFactory()
// let modernFurnitureFactory = new ModernFurnitureFactory()

// let client = new Client(victorianFactory)

// let furniture = client.createFurniture('chair')
// console.log(furniture.sitOn())