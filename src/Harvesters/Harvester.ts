import { Base } from '../Base';
import { Resource } from '../Resources/Resource';

export class Harvester extends Base {
	private multiplier: number;
	constructor(name: string, resource: Resource, public cost: Function, public update: Function) {
		super(name);
		this.multiplier = 1;
	}
	getMultiplier() {
		return this.multiplier;
	}
	setMultiplier(newMultiplier: number) {
		this.multiplier = newMultiplier;
	}
	incrmentMultiplier(amount = 1) {
		this.multiplier += amount;
	}
	decremenMultiplier(amount = 1) {
		this.multiplier -= amount;
	}
}