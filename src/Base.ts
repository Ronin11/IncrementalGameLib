export abstract class Base {
	protected count: number;
	constructor(readonly name: string){
		this.count = 0;
	}
	getName(){
		return this.name;
	}
	getCount(){
		return this.count;
	}
	setCount(newCount: number){
		this.count = newCount;
	}
	incrementCount(amount = 1){
		this.count += amount;
	}
	decrementCount(amount = 1){
		this.count -= amount;
	}
}