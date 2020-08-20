import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from "@angular/core";
import { Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CityCoordinates } from "../weather-module/domain";
import { WeatherService } from "../weather-module/weather.service";

@Component({
	selector: "app-weather",
	templateUrl: "./weather.component.html",
	styleUrls: ["./weather.component.scss"],
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
	public weatherData?: Record<string, any>;
	public getCityCoordinates = new Subject<CityCoordinates>();

	public constructor(
		public weatherService: WeatherService,
		private cdr: ChangeDetectorRef
	) { }

	public async ngOnInit() {
		// this.weatherData = await this.weatherService.getWeather();
		this.getCityCoordinates.pipe(
			switchMap(e => this.weatherService.getWeatherByCoordinates(e))
		).subscribe(e => {
			console.log(e);
			this.weatherData = e;
		})
		this.cdr.detectChanges();
	}
}
