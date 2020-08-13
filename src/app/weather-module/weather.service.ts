import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
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
	public weatherAPI = `https://api.darksky.net/forecast/[key]/[latitude],[longitude]`;

	public constructor() {}

	public getCurrentPosition() {
		return new Promise((resolve, reject) => {
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
		console.log(position);
	}
}
