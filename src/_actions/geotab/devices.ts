import type {
  DeviceStatusInfoType,
  DeviceType,
} from "../../_types/geotab/devices";
import type { IAddinContext } from "../../contexts/addinContext";
import { geoApiCall } from "./geoApiCall";

export async function getDevicesStatusInfo(
  addinContext: IAddinContext
): Promise<DeviceStatusInfoType[]> {
  return geoApiCall(addinContext, "Get", { typeName: "DeviceStatusInfo" });
}

export async function getDevices(
  addinContext: IAddinContext
): Promise<DeviceType[]> {
  return geoApiCall(addinContext, "Get", {
    typeName: "Device",
  });
}

export async function getVehicleData(
  addinContext: IAddinContext,
  deviceVins: string[]
): Promise<any> {
  if (!deviceVins.length) {
    return [];
  }
  return geoApiCall(addinContext, "DecodeVinsNew", {
    vins: deviceVins,
  });
}
