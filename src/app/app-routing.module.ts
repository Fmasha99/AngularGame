import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { AuthorizeComponent } from "./authorize/authorize.component";
import { BoardComponent } from "./board/board.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
	{ path: "game", component: BoardComponent },
	{ path: "about", component: AboutComponent },
	{ path: "login", component: AuthorizeComponent },
	{ path: "weather", component: WeatherComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
