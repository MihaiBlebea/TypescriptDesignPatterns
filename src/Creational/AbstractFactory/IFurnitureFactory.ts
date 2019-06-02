import { ISofa, IChair, ITable } from './FurnitureInterfaces'


export default interface FurnitureAbstractFactory
{
    createChair() : IChair

    createTable() : ITable

    createSofa() : ISofa
}