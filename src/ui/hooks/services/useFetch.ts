import { useCallback, useEffect, useReducer } from 'react';

type State<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type Action<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; payload: Error };

const cache = new Map<string, any>();

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_FAILURE':
      return {
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

type FetchFunction<T> = () => Promise<T>;

function useFetch<T = unknown>(fetchFn: FetchFunction<T>, cacheKey?: string) {
  const [state, dispatch] = useReducer(fetchReducer<T>, {
    data: cacheKey && cache.has(cacheKey) ? cache.get(cacheKey) : null,
    loading: cacheKey ? !cache.has(cacheKey) : true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' });

    try {
      const result = await fetchFn();
      if (cacheKey) cache.set(cacheKey, result);
      dispatch({ type: 'FETCH_SUCCESS', payload: result });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error as Error });
    }
  }, [fetchFn, cacheKey]);

  useEffect(() => {
    if (!cacheKey || !cache.has(cacheKey)) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchData();
    }
  }, [fetchData, cacheKey]);

  return { ...state, refetch: fetchData };
}

export default useFetch;
