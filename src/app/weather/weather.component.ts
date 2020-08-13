import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather-module/weather.service";

@Component({
	selector: "app-weather",
	templateUrl: "./weather.component.html",
	styleUrls: ["./weather.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
	public constructor(public weatherService: WeatherService) {}

	public ngOnInit() {}
}
