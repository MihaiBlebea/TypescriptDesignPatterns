import IFurnitureFactory from './IFurnitureFactory'
import { ISofa, IChair, ITable } from './FurnitureInterfaces'
import { ModernChair, ModernSofa, ModernTable } from './Furniture'


export default class ModernFurnitureFactory implements IFurnitureFactory
{
    createChair() : IChair
    {
        return new ModernChair()
    }

    createSofa() : ISofa
    {
        return new ModernSofa()
    }

    createTable() : ITable
    {
        return new ModernTable()
    }
}