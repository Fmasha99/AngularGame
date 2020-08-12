import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { AuthorizeComponent } from "./authorize/authorize.component";
import { BoardComponent } from "./board/board.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
	{
		path: "game",
		loadChildren: () => import("./game/game.module").then((m) => m.GameModule),
	},
	{ path: "about", component: AboutComponent },
	{ path: "login", component: AuthorizeComponent },
	{
		path: "weather",
		loadChildren: () =>
			import("./weather-module/weather-module.module").then(
				(m) => m.WeatherModuleModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
