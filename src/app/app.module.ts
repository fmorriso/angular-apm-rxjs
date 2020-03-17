import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
//
import { CustomMaterialModule } from './shared/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
//
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
	declarations: [AppComponent, PageNotFoundComponent, WelcomeComponent, NavigationComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CustomMaterialModule,
		FlexLayoutModule,
		HttpClientModule,
		InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
