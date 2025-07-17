import type { PreRouteRequestBody } from "../../_types/minervas/preRoute";

export const postPreRoute = async (requestBody: PreRouteRequestBody) => {
  const response = await fetch("https://api.minervas.it/preRoute", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });
  return response.json();
};
