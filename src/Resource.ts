export class Resource {
	constructor(private name: string){}
	getName(){
		return `Name: ${this.name}`
	}
}