import 'api-schemas/index.d.ts';
import { connectRemoteData } from '../../../../api-client';
import type { RemoteDataConnector } from '../../../../api-client';

const serviceUrl = process.env.STATIONS_SERVICE + '/stations';

export type Station = Components.Schemas.Station;

export type StationsConnector = RemoteDataConnector<Station[]>;

export const useStations: StationsConnector = connectRemoteData<Station[]>(serviceUrl);
