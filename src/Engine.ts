import { Injectable } from '@angular/core';
import { StateInfo } from './StateInfo';
import { ResourceManager } from './Resources/ResourceManager';
import { HarvesterManager } from './Harvesters/HarvesterManager';
import { UpgradeManager } from './Upgrades/UpgradeManager';

@Injectable()
export class Engine{
	private static instance: Engine;
	StateInfo: StateInfo;
	ResourceManager: ResourceManager;
	HarvesterManager: HarvesterManager;
	UpgradeManager: UpgradeManager;

	private constructor(){
		this.StateInfo = new StateInfo();
		this.ResourceManager = new ResourceManager();
		this.HarvesterManager = new HarvesterManager();
		this.UpgradeManager = new UpgradeManager();
		setInterval(this.updateLoop, 1000 * 1 * 1);
	}

	static getInstance(): Engine{
		if(!this.instance){
			this.instance = new Engine();
		}
		return this.instance;
	}
	
	private updateLoop(){
		console.log("updateLoop");
		// HarvesterManager.
	}
}