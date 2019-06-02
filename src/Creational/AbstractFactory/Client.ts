import IFurnitureFactory from './IFurnitureFactory'


export default class Client
{
    private _furnitureFactory : IFurnitureFactory

    constructor(furnitureFactory : IFurnitureFactory)
    {
        this._furnitureFactory = furnitureFactory
    }

    createFurniture(type : string)
    {
        switch(type.toLocaleLowerCase())
        {
            case 'chair':
                return this._furnitureFactory.createChair()
            case 'sofa':
                return this._furnitureFactory.createSofa()
            case 'table':
                return this._furnitureFactory.createTable()
            default:
                throw Error('Specified furniture type is not in stock')
        }
    }
}