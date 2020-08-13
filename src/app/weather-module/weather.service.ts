import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService {
	public lng: number;
	public lat: number;
	public temperatureNow: number;
	public temperatureFeelings: number;
	public sunRize: number;
	public sunDown: number;
	public widness: number;
	public rain: number;
	public ultraviolet: number;
	public humidity: number;
	public weatherAPI = `https://api.darksky.net/forecast/6f30bcb415b8381ae3532266723b9e3a/[latitude],[longitude]`;

	public constructor(private http: HttpClient) {}

	public getCurrentPosition() {
		return new Promise<Position>((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				(position: Position) => {
					resolve(position);
				},
				(positionError: PositionError) => {
					reject(positionError);
				}
			);
		});
	}

	public async getWeather() {
		const position = await this.getCurrentPosition();
		const url = `api/forecast/6f30bcb415b8381ae3532266723b9e3a/${position.coords.latitude},${position.coords.longitude}`;
		const data = await this.http.get(url).toPromise();
		return data;
	}
}
