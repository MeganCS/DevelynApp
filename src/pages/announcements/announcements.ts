import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsPage } from '../sports/sports';

@Component({
	selector: 'page-announcements',
	templateUrl: 'announcements.html'
})
export class AnnouncementsPage {
	constructor(public navCtrl: NavController) {

	}
}
