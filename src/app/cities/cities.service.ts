import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { City } from "../cities/cities.component";

@Injectable()
export class CitiesService {
	public constructor(private http: HttpClient) {}
}
