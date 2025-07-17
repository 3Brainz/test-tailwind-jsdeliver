import type { DeviceStatusInfoType } from "../_types/geotab/devices";

export const getDeviceInfoMiddlePoint = (
  devicesStatusInfo: DeviceStatusInfoType[]
): [number, number] | undefined => {
  if (devicesStatusInfo.length === 0) {
    return undefined;
  }
  const middlePoint = devicesStatusInfo.reduce(
    (acc, device) => {
      return {
        latitude: acc.latitude + device.latitude,
        longitude: acc.longitude + device.longitude,
      };
    },
    { latitude: 0, longitude: 0 }
  );
  return [
    middlePoint.latitude / devicesStatusInfo.length,
    middlePoint.longitude / devicesStatusInfo.length,
  ];
};
