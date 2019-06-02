import { IChair } from './../FurnitureInterfaces'


export default class ModernChair implements IChair
{
    sitOn()
    {
        console.log('You are sitting on a modern chair')
    }
}