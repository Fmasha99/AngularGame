import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { debounceTime, filter, map, switchMap, tap } from "rxjs/operators";
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
	public city = new Subject<string>();
	private citySubscription: Subscription;
	public cities?: { description: string; id: string }[];

	public constructor(public citiesService: CitiesService) { }

	public ngOnInit() {
		this.citySubscription = this.city.pipe(
			filter(e => e.length > 1),
			debounceTime(10),
			switchMap(e => this.citiesService.queryCities(e))
		).subscribe(e => {
			this.cities = e;
		});
	}

	public ngOnDestroy() {
		this.citySubscription.unsubscribe();
	}
}
