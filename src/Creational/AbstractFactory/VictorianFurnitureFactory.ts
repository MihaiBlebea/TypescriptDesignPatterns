import IFurnitureFactory from './IFurnitureFactory'
import { ISofa, IChair, ITable } from './FurnitureInterfaces'
import { VictorianChair, VictorianSofa, VictorianTable } from './Furniture'


export default class VictorianFurnitureFactory implements IFurnitureFactory
{
    createChair() : IChair
    {
        return new VictorianChair()
    }

    createSofa() : ISofa
    {
        return new VictorianSofa()
    }

    createTable() : ITable
    {
        return new VictorianTable()
    }
}