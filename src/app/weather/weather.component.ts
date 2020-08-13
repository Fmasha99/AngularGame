import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from "@angular/core";
import { WeatherService } from "../weather-module/weather.service";

@Component({
	selector: "app-weather",
	templateUrl: "./weather.component.html",
	styleUrls: ["./weather.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
	public weatherData?: Record<string, any>;

	public constructor(
		public weatherService: WeatherService,
		private cdr: ChangeDetectorRef
	) {}

	public async ngOnInit() {
		this.weatherData = await this.weatherService.getWeather();
		this.cdr.detectChanges();
	}
}
