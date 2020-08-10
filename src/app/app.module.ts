import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { CellComponent } from "./board/cell/cell.component";
import { AuthorizeComponent } from './authorize/authorize.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
	declarations: [AppComponent, BoardComponent, CellComponent, AboutComponent, AuthorizeComponent, WeatherComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
