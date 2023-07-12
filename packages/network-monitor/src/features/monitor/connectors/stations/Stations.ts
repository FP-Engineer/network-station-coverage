import 'api-schemas/index.d.ts';
import { connectRemoteData } from '../../../../api-client';

export type Station = Components.Schemas.Station;

const serviceUrl = process.env.STATIONS_SERVICE + '/stations';
export const useStations = connectRemoteData<Station[]>(serviceUrl);