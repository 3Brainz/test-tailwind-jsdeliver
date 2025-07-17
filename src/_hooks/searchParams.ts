import { useCallback, useState, useEffect } from "react";

export function useSearchParams() {
  const [params, setParamsState] = useState(
    () => new URLSearchParams(window.location.search)
  );

  // Aggiorna lo stato interno se l'utente naviga indietro/avanti
  useEffect(() => {
    const handler = () => {
      setParamsState(new URLSearchParams(window.location.search));
    };

    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const setParam = useCallback(
    (key: string, value: string, { replace = false } = {}) => {
      const newParams = new URLSearchParams(window.location.search);
      if (value === null || value === undefined) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }

      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      if (replace) {
        window.history.replaceState({}, "", newUrl);
      } else {
        window.history.pushState({}, "", newUrl);
      }

      setParamsState(newParams);
    },
    []
  );

  const getParam = useCallback(
    (key: string) => {
      return params.get(key);
    },
    [params]
  );

  return { getParam, setParam, params };
}
