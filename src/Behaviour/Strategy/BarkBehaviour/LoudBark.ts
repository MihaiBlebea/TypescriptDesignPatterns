import IBarkBehaviour from './IBarkBehaviour'


export default class LoudBark implements IBarkBehaviour
{
    private _type : string

    constructor(type : string)
    {
        this._type = type
    }

    bark()
    {
        console.log(`I bark very ${ this._type }`)
    }
}