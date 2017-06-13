import { Upgrade } from './Upgrade'

export class UpgradeManager {
	upgrades: Upgrade[];

	constructor() {
		this.upgrades = [];
	}

	addUpgrade(upgrade: Upgrade){
		this.upgrades.push(upgrade);
	}
}