import { Base } from './Base'

export class Resource extends Base {
    constructor(name: string) {
        super(name);
    }
    decrementCount(num: number) {
        if (num > this.count) {
            throw ("Not enoug'Not enough 'me);
       } else {
            this.count -= num;
        }
    }

}