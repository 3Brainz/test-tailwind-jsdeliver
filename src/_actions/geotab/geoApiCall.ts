import type { IAddinContext } from "../../contexts/addinContext";

export function geoApiCall<T>(
  addinContext: IAddinContext,
  method: string,
  params: any
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    addinContext.geoApi.call(
      method,
      params,
      (result: T) => resolve(result),
      (error: any) => reject(error)
    );
  });
}
