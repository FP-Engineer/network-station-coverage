export interface DeviceViewModel extends Components.Schemas.Device {
	coveredByStationAt?: Components.Schemas.Location,
	withSpeed?: number;
}
