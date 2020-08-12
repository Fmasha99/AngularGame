import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeatherComponent } from "../weather/weather.component";

const routes: Routes = [
	{
		path: "",
		component: WeatherComponent,
	},
];

@NgModule({
	declarations: [WeatherComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WeatherModuleModule {}
