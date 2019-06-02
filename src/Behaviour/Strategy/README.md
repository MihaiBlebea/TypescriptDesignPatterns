```
import { RobotDog, HealthyEat, LoudBark } from './Behaviour'

let dog = new RobotDog(new HealthyEat(80, 5, 40), new LoudBark('loud'))

dog.bark()
```