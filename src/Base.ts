export abstract class Base {
	protected count: number;
	constructor(readonly name: string) {
		this.count = 0;
	}
	getName() {
		return this.name;
	}
	getCount() {
		return this.count;
	}
	seCount(newCount: number) {
		this.count = newCount;
	}
	incremntCount(amount = 1) {
		this.count += amount;
	}
	decrementCunt(amount = 1) {
		this.count -= amount;
	}
}