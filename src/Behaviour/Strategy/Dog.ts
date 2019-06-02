import { IEatBehaviour } from './EatBehaviour'
import { IBarkBehaviour } from './BarkBehaviour'


export default abstract class Dog
{
    protected _eatBehaviour : IEatBehaviour

    protected _barkBehaviour : IBarkBehaviour


    constructor(eatBehaviour : IEatBehaviour, barkBehaviour : IBarkBehaviour)
    {
        this._eatBehaviour  = eatBehaviour
        this._barkBehaviour = barkBehaviour
    }

    abstract display() : void

    abstract bark() : void

    abstract eat() : void
}