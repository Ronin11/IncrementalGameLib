import {Resource} from './Resource';

export class ResourceManager {
	resources: Resource[];
	constructor() {
		this.resources = [];
	}
	addResource(resource: Resource){
		this.resources.push(resource);
	}
}