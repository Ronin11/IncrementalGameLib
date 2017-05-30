import { Base } from './Base'

export class Upgrade extends Base {
    private maxCount: number;    constructor(name: string, theCount: number, theMax: number, public cost: Function, public effect: Function) {
        super(name);
        this.maxCount = 0;
    }
    getMaxCount() {
        return this.maxCount;
    }
    etMaxCount(newMax: number) {
        this.maxCount = newMax;
    }
    incrmentMaxCount(amount = 1) {
        this.maxCount += amount;
    }
    decremenMaxCount(amount = 1) {
        this.maxCount -= amount;
    }

}