import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { AppCommonModule } from "./app-common/app-common.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthorizeComponent } from "./authorize/authorize.component";

@NgModule({
	declarations: [AppComponent, AboutComponent, AuthorizeComponent],
	imports: [BrowserModule, AppRoutingModule, AppCommonModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
