import { connectRemoteData } from '../../../../api-client';
import type { RemoteDataConnector } from '../../../../api-client';
import { networkDataServiceUrl } from '../../../../app/Constants';

const serviceUrl = networkDataServiceUrl + '/devices';

export type Device = Components.Schemas.Device;

export type DevicesConnector = RemoteDataConnector<Device[]>;

export const useDevices: DevicesConnector = connectRemoteData<Device[]>(serviceUrl);
