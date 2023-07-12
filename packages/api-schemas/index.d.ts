declare namespace Components {
    namespace Schemas {
        export interface Location {
            x: number;
            y: number;
        }
        export interface Station {
            location: Location;
            reach: number;
        }
    }
}
declare namespace Paths {
    namespace GetStations {
        namespace Responses {
            export type $200 = Components.Schemas.Station[];
        }
    }
}
