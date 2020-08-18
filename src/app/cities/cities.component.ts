import { Component } from "@angular/core";

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
export class CitiesComponent {
	public constructor() {}
}
