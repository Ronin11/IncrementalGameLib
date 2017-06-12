import { Base } from './Base'

export class Harvester extends Base {
	private multiplier: number;
	constructor(name: string, public cost: Function, public update: Function) {
		super(name);
		this.multiplier = 1;
	}
	getMultiplier() {
		return this.multiplier;
	}
	etMultiplier(newMultiplier: number) {
		this.multiplier = newMultiplier;
	}
	incrmentMultiplier(amount = 1) {
		this.multiplier += amount;
	}
	decremenMultiplier(amount = 1) {
		this.multiplier -= amount;
	}
}