import { useMutation } from "@tanstack/react-query";
import type { PreRouteRequestBody } from "../../_types/minervas/preRoute";
import { postPreRoute } from "../../_actions/minervas/preRoute";

export const POST_PRE_ROUTE_MUTATION_KEY = "postPreRoute";

export const usePostPreRoute = () => {
  return useMutation({
    mutationKey: [POST_PRE_ROUTE_MUTATION_KEY],
    mutationFn: (requestBody: PreRouteRequestBody) => postPreRoute(requestBody),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });
};
