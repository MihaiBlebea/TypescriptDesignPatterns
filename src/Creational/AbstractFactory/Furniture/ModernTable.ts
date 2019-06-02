import { ITable } from './../FurnitureInterfaces'


export default class ModernTable implements ITable
{
    eatOn()
    {
        console.log('You are eating on a modern table')
    }
}