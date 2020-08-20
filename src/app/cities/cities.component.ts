import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { debounceTime, filter, map, switchMap, tap } from "rxjs/operators";
import { WeatherService } from "../weather-module/weather.service";
import { CitiesService } from "./cities.service";

export interface City {
	name: string;
	id: number;
	lat?: number;
	lng?: number;
}

@Component({
	selector: "app-cities",
	templateUrl: "./cities.component.html",
	styleUrls: ["./cities.component.scss"],
})
export class CitiesComponent implements OnInit, OnDestroy {
	public queryCity = new Subject<string>();
	public locality = new Subject<string>();
	public coordinates?: { lat: number; lng: number };
	private citySubscription: Subscription;
	private idSubscription: Subscription;
	public cities?: { description: string; id: string }[];

	public constructor(public citiesService: CitiesService,
		public weatherService: WeatherService,
		public cdr: ChangeDetectorRef) { }

	public ngOnInit() {
		this.citySubscription = this.queryCity.pipe(
			filter(e => e.length > 1),
			debounceTime(300),
			switchMap(e => this.citiesService.queryCities(e))
		).subscribe(e => {
			this.cities = e;
			this.cdr.detectChanges();
		});
		this.idSubscription = this.locality.pipe(
			switchMap(e => this.citiesService.getLocationById(e))
		).subscribe(e => {
			this.coordinates = e;
			console.log(this.coordinates);
		});

	}

	public ngOnDestroy() {
		this.citySubscription.unsubscribe();
		this.idSubscription.unsubscribe();
	}

}
