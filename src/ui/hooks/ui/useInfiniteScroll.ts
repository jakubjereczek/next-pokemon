import { useCallback, useState } from 'react';

type UseInfiniteScrollProps<T> = {
  initialItems: T[];
  limit: number;
  fetchFn: (limit: number, offset: number) => Promise<T[]>;
};

function useInfiniteScroll<T>({
  initialItems,
  limit,
  fetchFn,
}: UseInfiniteScrollProps<T>) {
  const [state, setState] = useState({
    items: initialItems,
    nextOffset: initialItems.length,
    isFetching: false,
  });

  const loadMore = useCallback(async () => {
    if (state.isFetching) {
      return;
    }

    setState(prev => ({ ...prev, isFetching: true }));
    try {
      const newItems = await fetchFn(limit, state.nextOffset);
      setState(prev => ({
        ...prev,
        items: [...prev.items, ...newItems],
        nextOffset: prev.nextOffset + newItems.length,
        isFetching: false,
      }));
    } catch {
      setState(prev => ({ ...prev, isFetching: false }));
    }
  }, [fetchFn, limit, state.isFetching, state.nextOffset]);

  return {
    items: state.items,
    isFetching: state.isFetching,
    loadMore,
  };
}

export default useInfiniteScroll;
