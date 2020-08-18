import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, map, tap } from "rxjs/operators";
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
export class CitiesComponent implements OnInit {
	public city = new Subject<string>();

	public constructor(public citiesService: CitiesService) {}

	public ngOnInit() {
		this.city
			.pipe(
				tap((e) => console.log(e)),
				map((e) => e.toLocaleUpperCase()),
				debounceTime(1000)
			)
			.subscribe((letter) => console.log(letter));
	}
}
