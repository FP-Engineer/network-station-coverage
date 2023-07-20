import {
	calculateDistance,
	calculateSpeed,
	determineBestConnection,
} from '.';

describe('Distance Utility Test Suite', () => {

	it('should return 0 if device and station are at the same location', async () => {
		
		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 0, y: 0 }, reach: 0 };

		expect(calculateDistance(lhs, rhs)).toBe(0);
	});

	it('should return the distance between station and device', () => {
		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 3, y: 4 }, reach: 0 };

		expect(calculateDistance(lhs, rhs)).toBe(5);
	});

	it('should return the correct distance at same x coordinate.', () => {
		
		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 0, y: 3 }, reach: 0 };

		expect(calculateDistance(lhs, rhs)).toBe(3);
	});

	it('should return the correct distance at same y coordinate.', () => {
		
		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 3, y: 0 }, reach: 0 };

		expect(calculateDistance(lhs, rhs)).toBe(3);
	});
});

describe('Speed Utility Test Suite', () => {

	it('should return the correct speed if distance is less than station reach.', () => {

		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 3, y: 4 }, reach: 6 };
		const expectedSpeed = 1;
		const actualSpeed = calculateSpeed(lhs, rhs);

		expect(actualSpeed).toBe(expectedSpeed);
	});

	it('should return 0 if distance is greater than station reach.', () => {

		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 10, y: 10 }, reach: 5 };
		const expectedSpeed = 0;
		const actualSpeed = calculateSpeed(lhs, rhs);

		expect(actualSpeed).toBe(expectedSpeed);
	});

	it('should return the correct speed if distance is equal to station reach.', () => {

		const lhs = { location: { x: 0, y: 0 } };
		const rhs = { location: { x: 3, y: 4 }, reach: 5 };
		const expectedSpeed = 0;
		const actualSpeed = calculateSpeed(lhs, rhs);

		expect(actualSpeed).toBe(expectedSpeed);
	});
});

describe('Best Connection Test Suite', () => {

	it('should return the connection with the highest speed.', () => {

		const stations = [{
			// distance to device: 7
			location: { x: 0, y: 0 },
			reach: 25
		}, {
			// distance to device: 21
			location: { x: 20, y: 20 },
			reach: 25
		}];
		const device = {
			location: { x: 5, y: 5 }
		};
		const expectedConnectionAt = { x: 0, y: 0 };

		const { toStationAt } = determineBestConnection(stations, device)!;

		expect(toStationAt).toEqual(expectedConnectionAt);
	});

	it('should return null if no functional connection is available.', () => {

		const stations = [{
			location: { x: 0, y: 0 },
			reach: 0
		}, {
			location: { x: 20, y: 20 },
			reach: 0
		}];
		const device = {
			location: { x: 5, y: 5 }
		};
		const expectedConnection = null;

		expect(determineBestConnection(stations, device)).toEqual(expectedConnection);
	});
});