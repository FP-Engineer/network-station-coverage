import 'api-schemas/index.d.ts';
import { connectRemoteData } from '../../../../api-client';
import type { RemoteDataConnector } from '../../../../api-client';
import { networkDataServiceUrl } from '../../../../app/Constants';

const serviceUrl = networkDataServiceUrl + '/stations';

export type Station = Components.Schemas.Station;

export type StationsConnector = RemoteDataConnector<Station[]>;

export const useStations: StationsConnector = connectRemoteData<Station[]>(serviceUrl);
