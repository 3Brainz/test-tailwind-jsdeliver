import { useContext } from "react";

import {
  getDevices,
  getDevicesStatusInfo,
  getVehicleData,
} from "../../_actions/geotab/devices";
import { useQuery } from "@tanstack/react-query";
import { AddinContext } from "../../contexts/addinContext";

export const DEVICES_STATUS_INFO_QUERY_KEY = "devicesStatusInfo";

export type CustomQueryParams = {
  enabled?: boolean;
};

export const useGetDevicesStatusInfo = (params: CustomQueryParams = {}) => {
  const addinContext = useContext(AddinContext);
  const query = useQuery({
    queryKey: [DEVICES_STATUS_INFO_QUERY_KEY],
    queryFn: () => getDevicesStatusInfo(addinContext),
    enabled: params.enabled,
  });
  return {
    devicesStatusInfo: query.data,
    isLoadingDevicesStatusInfo: query.isLoading,
    isErrorDevicesStatusInfo: query.isError,
    refetchDevicesStatusInfo: query.refetch,
  };
};

export const DEVICES_QUERY_KEY = "devices";

export const useGetDevices = (params: CustomQueryParams = {}) => {
  const addinContext = useContext(AddinContext);
  const query = useQuery({
    queryKey: [DEVICES_QUERY_KEY],
    queryFn: () => getDevices(addinContext),
    enabled: params.enabled,
  });
  return {
    devices: query.data,
    isLoadingDevices: query.isLoading,
    isErrorDevices: query.isError,
    refetchDevices: query.refetch,
  };
};

export const VEHICLE_DATA_QUERY_KEY = "vehicleData";

export type VehicleDataQueryParams = CustomQueryParams & {
  deviceVins: string[];
};

export const useGetVehiclesData = (params: VehicleDataQueryParams) => {
  const addinContext = useContext(AddinContext);
  const query = useQuery({
    queryKey: [VEHICLE_DATA_QUERY_KEY, params.deviceVins],
    queryFn: () => getVehicleData(addinContext, params.deviceVins),
    enabled: params.enabled && !!params.deviceVins.length,
  });
  return {
    vehicleData: query.data,
    isLoadingVehicleData: query.isLoading,
    isErrorVehicleData: query.isError,
    refetchVehicleData: query.refetch,
  };
};
