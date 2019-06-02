import Dog from './Dog'
import { IEatBehaviour } from './EatBehaviour'
import { IBarkBehaviour } from './BarkBehaviour'



export default class RobotDog extends Dog
{
    constructor(eatBehaviour : IEatBehaviour, barkBehaviour : IBarkBehaviour)
    {
        super(eatBehaviour, barkBehaviour)
    }

    display() : void 
    {
        
    }

    bark() : void 
    {
        console.log(this)
        this._barkBehaviour.bark()
    }

    eat() : void 
    {
        this._eatBehaviour.eat()
    }
}