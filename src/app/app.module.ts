import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { AppCommonModule } from "./app-common/app-common.module";
import { DialogComponent } from "./app-common/dialog/dialog.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthorizeComponent } from "./core/authorize/authorize.component";
import { AutorizeGuard } from "./core/authorize/autorize.guard";
import { CoreModule } from "./core/core.module";

@NgModule({
	declarations: [AppComponent, AboutComponent, AuthorizeComponent, DialogComponent],
	imports: [BrowserModule, AppRoutingModule, AppCommonModule, FormsModule, ReactiveFormsModule, CoreModule],
	providers: [AutorizeGuard],
	bootstrap: [AppComponent],
})
export class AppModule { }
