import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
	public chosenPositionweatherData?: Record<string, any>;
	public currentPositionWeatherData?: Record<string, any>;
	public getCityCoordinates = new Subject<CityCoordinates>();

	public constructor(
		public weatherService: WeatherService,
		private cdr: ChangeDetectorRef
	) { }

	public async ngOnInit() {
		this.currentPositionWeatherData = await this.weatherService.getWeather();
		this.getCityCoordinates.pipe(
			switchMap(e => this.weatherService.getWeatherByCoordinates(e))
		).subscribe(e => {
			this.chosenPositionweatherData = e;
			this.cdr.detectChanges();
		})
		this.cdr.detectChanges();
	}

	public get weatherData() {
		return this.chosenPositionweatherData ?? this.currentPositionWeatherData;
	}
}
