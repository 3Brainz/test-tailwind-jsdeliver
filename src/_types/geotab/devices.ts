export type DeviceStatusInfoType = {
  bearing: number;
  currentStateDuration: string;
  device: {
    id: string;
  };
  driver: string;
  groups: Array<{
    id: string;
    name?: string;
  }>;
  isDeviceCommunicating: boolean;
  isDriving: boolean;
  isHistoricLastDriver: boolean;
  latitude: number;
  longitude: number;
  speed: number;
};

export type DeviceType = {
  vehicleIdentificationNumber: string;
  engineVehicleIdentificationNumber: string;
  odometerFactor: number;
  odometerOffset: number;
  engineHourOffset: number;
  licensePlate: string;
  licenseState: string;
  pinDevice: boolean;
  fuelTankCapacity: number;
  autoGroups: any[];
  activeFrom: string;
  activeTo: string;
  comment: string;
  groups: {
    id: string;
  }[];
  timeZoneId: string;
  deviceFlags: {
    activeFeatures: any[];
    isActiveTrackingAllowed: boolean;
    isContinuousConnectAllowed: boolean;
    isEngineAllowed: boolean;
    isGarminAllowed: boolean;
    isHOSAllowed: boolean;
    isIridiumAllowed: boolean;
    isOdometerAllowed: boolean;
    isTripDetailAllowed: boolean;
    isUIAllowed: boolean;
    isVINAllowed: boolean;
    ratePlans: any[];
  };
  deviceType: string;
  id: string;
  ignoreDownloadsUntil: string;
  maxSecondsBetweenLogs: number;
  name: string;
  productId: number;
  serialNumber: string;
  timeToDownload: string;
  workTime: string;
  devicePlans: string[];
  devicePlanBillingInfo: {
    billingLevel: number;
    devicePlanName: string;
  }[];
  customProperties: any[];
  mediaFiles: any[];
};

export type DeviceInfoType = {
  company: string;
  country: string;
  error: string;
  make: string;
  manufacturer: string;
  model: string;
  plant: string;
  vehicleType: string;
  vin: string;
};
