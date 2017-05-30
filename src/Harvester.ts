import { Base } from "./Base";

export class Harvester extends Base{
	private multiplier: number;
	constructor(name: string, public cost: Function, public update: Function){
		super(name);
		this.multiplier = 1;
	}
	getMultiplier(){
		return this.multiplier;
	}
	setMultiplier(newMultiplier: number){
		this.multiplier = newMultiplier;
	}
	incrementMultiplier(amount = 1){
		this.multiplier += amount;
	}
	decrementMultiplier(amount = 1){
		this.multiplier -= amount;
	}
}