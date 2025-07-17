import { useGetDevices } from "../_hooks/geotab/devices";

export const TestButton = () => {
  const { devices, refetchDevices } = useGetDevices({
    enabled: true,
  });
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={() => {
        console.log("clicked");
        refetchDevices();
        devices?.forEach((device) => {
          console.log(device);
        });
      }}
    >
      Test
    </button>
  );
};
