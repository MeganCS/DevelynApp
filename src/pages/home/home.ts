import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsPage } from '../sports/sports'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController) {

	}
}
