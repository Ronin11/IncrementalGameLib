import { Harvester } from './Harvester'

export class HarvesterManager {
	harvesters: Harvester[];

	constructor() {
		this.harvesters = [];
	}

	addHarvester(harvester: Harvester){
		this.harvesters.push(harvester);
	}

	
}