import { ITable } from './../FurnitureInterfaces'


export default class VictorianTable implements ITable
{
    eatOn()
    {
        console.log('You are eating on a victorian table')
    }
}