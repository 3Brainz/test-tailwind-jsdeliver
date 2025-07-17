export type VehicleType = "truck" | "bus" | "car";
export type OutputType = "Json" | "PDF";
export type Language = "it" | "en" | "us";

export interface PreRouteRequestBody {
  origin: string;
  destination: string;
  steps?: string[];
  vehicle: VehicleType;
  vehiclePayload: number;
  fuel?: string;
  vehicleModel?: string;
  lang?: Language;
  departureTime?: string; // formato: "YYYY-MM-DDTHH:mm:ss"
  type?: OutputType;
}
