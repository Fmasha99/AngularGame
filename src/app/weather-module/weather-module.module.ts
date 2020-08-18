import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesComponent } from "../cities/cities.component";
import { CitiesService } from "../cities/cities.service";
import { WeatherComponent } from "../weather/weather.component";
import { WeatherService } from "./weather.service";

const routes: Routes = [
	{
		path: "",
		component: WeatherComponent,
	},
];

@NgModule({
	declarations: [WeatherComponent, CitiesComponent],
	imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
	providers: [WeatherService, CitiesService],
})
export class WeatherModuleModule {}
