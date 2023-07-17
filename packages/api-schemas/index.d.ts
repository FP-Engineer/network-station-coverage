declare namespace Components {
    namespace Schemas {
        export interface Device {
            location: {
                x: number;
                y: number;
            };
        }
        export interface Location {
            x: number;
            y: number;
        }
        export interface Station {
            location: {
                x: number;
                y: number;
            };
            reach: number;
        }
    }
}
declare namespace Paths {
    namespace GetDevices {
        namespace Responses {
            /**
             * example:
             * [
             *   {
             *     "location": {
             *       "x": 0,
             *       "y": 0
             *     }
             *   }
             * ]
             */
            export type $200 = {
                location: {
                    x: number;
                    y: number;
                };
            }[];
        }
    }
    namespace GetStations {
        namespace Responses {
            /**
             * example:
             * [
             *   {
             *     "location": {
             *       "x": 0,
             *       "y": 0
             *     },
             *     "reach": 0
             *   }
             * ]
             */
            export type $200 = {
                location: {
                    x: number;
                    y: number;
                };
                reach: number;
            }[];
        }
    }
}
