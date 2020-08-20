import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { debounceTime, filter, switchMap } from "rxjs/operators";
import { WeatherService } from "../weather-module/weather.service";
import { CitiesService } from "./cities.service";

// export interface City {
// 	name: string;
// 	id: number;
// 	lat?: number;
// 	lng?: number;
// }

@Component({
	selector: "app-cities",
	templateUrl: "./cities.component.html",
	styleUrls: ["./cities.component.scss"],
})
export class CitiesComponent implements OnInit, OnDestroy {
	@Output() public sendCoordinates = new EventEmitter<any>();

	public queryCity = new Subject<string>();
	public locality = new Subject<string>();
	private citySubscription: Subscription;
	private idSubscription: Subscription;
	public cities?: { description: string; id: string }[];

	public constructor(public citiesService: CitiesService,
		public weatherService: WeatherService,
		public cdr: ChangeDetectorRef) {
	}

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
			this.sendCoordinates.emit(e);
		});
	}

	public ngOnDestroy() {
		this.citySubscription.unsubscribe();
		this.idSubscription.unsubscribe();
	}

	public onSelect(id: string) {
		this.locality.next(id);
		this.cities = undefined;
	}
}
