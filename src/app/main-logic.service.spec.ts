import { TestBed } from "@angular/core/testing";

import { MainLogicService } from "./game/main-logic.service";

describe("MainLogicService", () => {
	let service: MainLogicService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(MainLogicService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
