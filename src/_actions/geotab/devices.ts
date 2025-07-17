import type {
  DeviceStatusInfoType,
  DeviceType,
} from "../../_types/geotab/devices";
import type { IAddinContext } from "../../contexts/addinContext";
import { geoApiCall } from "./geoApiCall";

export async function getDevicesStatusInfo(
  addinContext?: IAddinContext
): Promise<DeviceStatusInfoType[]> {
  if (!addinContext) throw new Error("addinContext is required");
  return geoApiCall(addinContext, "Get", { typeName: "DeviceStatusInfo" });
}

export async function getDevices(
  addinContext?: IAddinContext
): Promise<DeviceType[]> {
  if (!addinContext) throw new Error("addinContext is required");
  return geoApiCall(addinContext, "Get", {
    typeName: "Device",
  });
}

export async function getVehicleData(
  deviceVins: string[],
  addinContext?: IAddinContext
): Promise<any> {
  if (!addinContext) throw new Error("addinContext is required");
  if (!deviceVins.length) {
    return [];
  }
  return geoApiCall(addinContext, "DecodeVinsNew", {
    vins: deviceVins,
  });
}
