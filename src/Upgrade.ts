import { Base } from "./Base";

export class Upgrade extends Base{
	private maxCount: number;
	constructor( name: string, theCount: number, theMax: number, public cost: Function, public effect: Function){
		super(name);
		this.maxCount = 0;
	}
	getMaxCount(){
		return this.maxCount;
	}
	setMaxCount(newMax: number){
		this.maxCount = newMax;
	}
	incrementMaxCount(amount = 1){
		this.maxCount += amount;
	}
	decrementMaxCount(amount = 1){
		this.maxCount -= amount;
	}

}