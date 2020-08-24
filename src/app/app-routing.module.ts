import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AuthorizeComponent } from "./authorize/authorize.component";
import { AutorizeGuard } from "./authorize/autorize.guard";
import { CoreModule } from "./core/core.module";

const routes: Routes = [
	{
		path: "game",
		loadChildren: () => import("./game/game.module").then((m) => m.GameModule),
		canActivate: [AutorizeGuard]
	},
	{ path: "about", component: AboutComponent },
	{ path: "login", component: AuthorizeComponent, },
	{
		path: "weather",
		loadChildren: () =>
			import("./weather-module/weather-module.module").then(
				(m) => m.WeatherModuleModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes), CoreModule],
	exports: [RouterModule],
	providers: [AutorizeGuard],
})
export class AppRoutingModule { }
