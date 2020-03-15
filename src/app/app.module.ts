import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { APP_BASE_HREF } from '@angular/common';
//
import { CustomMaterialModule } from './shared/custom-material.module';
//
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
//
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		WelcomeComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CustomMaterialModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
