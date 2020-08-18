import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { City } from "../cities/cities.component";

@Injectable()
export class CitiesService {
	public cities: City[] = [];
	private updateCities = new Subject<City[]>();

	public constructor(private http: HttpClient) {}
}
