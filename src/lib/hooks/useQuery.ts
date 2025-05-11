import { useEffect, useState } from 'react';
import axiosInstance from '../axios-instance';

export default function useQuery({ url, options = {} }) {
  const [queryState, setQueryState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  console.log('queryState', queryState);
  console.log('url', url);

  async function fetchData() {
    setQueryState({
      data: null,
      isLoading: true,
      error: null,
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axiosInstance(url, options);
      setQueryState({
        data: response.data,
        isLoading: false,
        error: null,
      });
    } catch (e) {
      setQueryState((prev) => ({
        ...prev,
        error: e.message,
      }));
    } finally {
      setQueryState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }

    console.log('queryState', queryState);
  }

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return { refetchQuery: fetchData, ...queryState };
}
