import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

const googleApiKey = "AIzaSyBaAf4GftjdxWEccQfr3M2sjJW9EJFcyaA";
const googlePlacesAutocompleteUrl = "api/googleMap/maps/api/place/autocomplete/json?language=en";
const googlePlacesDetailsUrl = "api/googleMap/maps/api/place/details/json";

@Injectable()
export class CitiesService {
	public constructor(private http: HttpClient) {
		// this.queryCities("orlando").subscribe((e) => console.log(e));
		// this.getLocationById("ChIJ02oeW9PP20YR2XC13VO4YQs").subscribe((e) => console.log(e));
	}

	public queryCities(query: string) {
		return this.http
			.get<any>(googlePlacesAutocompleteUrl, {
				params: { input: query, key: googleApiKey },
			})
			.pipe(
				map(e =>
					e.predictions.map(el => ({
						description: el.description,
						id: el.place_id,
					}))
				)
			);
	}

	public getLocationById(placeId: string) {
		return this.http
			.get<any>(googlePlacesDetailsUrl, {
				params: { key: googleApiKey, place_id: placeId }
			})
			.pipe(
				map(e =>
					e.result.geometry.location.map(el => ({
						lat: el.lat,
						lng: el.lng,
					}))
				)
			);
	}
}
