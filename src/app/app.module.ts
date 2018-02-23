import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Announcements } from '../pages/announcements/announcements';
import { SportsPage } from '../pages/sports/sports';
import { SettingsPage } from '../pages/settings/settings';
import { SportsListComponent } from '../components/sports-list/sports-list';
import { SettingsProvider } from '../providers/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnnouncementsPage,
    SportsPage,
    SettingsPage,
    SportsListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnnouncementsPage,
    SportsPage,
    SettingsPage,
    SportsListComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider
  ]
})
export class AppModule {
}
