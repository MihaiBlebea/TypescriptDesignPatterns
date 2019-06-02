import { IChair } from './../FurnitureInterfaces'


export default class VictorianChair implements IChair
{
    sitOn()
    {
        console.log('You are sitting on a victorian chair')
    }
}