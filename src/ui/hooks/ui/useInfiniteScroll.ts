import { useCallback, useState } from 'react';

type UseInfiniteScrollProps<T> = {
  initialItems: T[];
  limit: number;
  fetchFn: (limit: number, offset: number) => Promise<T[]>;
  maxErrorInRow?: number;
};

function useInfiniteScroll<T>({
  initialItems,
  limit,
  fetchFn,
  maxErrorInRow = 3,
}: UseInfiniteScrollProps<T>) {
  const [state, setState] = useState({
    items: initialItems,
    nextOffset: initialItems.length,
    isFetching: false,
    errorCount: 0,
    hasFatalError: false,
  });

  const loadMore = useCallback(async () => {
    if (state.isFetching || state.hasFatalError) {
      return;
    }

    setState(prev => ({ ...prev, isFetching: true }));
    try {
      const newItems = await fetchFn(limit, state.nextOffset);
      if (newItems.length === 0) {
        throw new Error('No data');
      }
      setState(prev => ({
        ...prev,
        items: [...prev.items, ...newItems],
        nextOffset: prev.nextOffset + newItems.length,
        isFetching: false,
        errorCount: 0,
      }));
    } catch {
      setState(prev => {
        const newErrorCount = prev.errorCount + 1;
        return {
          ...prev,
          isFetching: false,
          errorCount: newErrorCount,
          hasFatalError: newErrorCount >= maxErrorInRow,
        };
      });
    }
  }, [
    fetchFn,
    limit,
    state.isFetching,
    state.nextOffset,
    state.hasFatalError,
    maxErrorInRow,
  ]);

  return {
    items: state.items,
    isFetching: state.isFetching,
    loadMore,
    hasFatalError: state.hasFatalError,
  };
}

export default useInfiniteScroll;
