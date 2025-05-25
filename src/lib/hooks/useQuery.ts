import { useEffect, useState } from 'react';
import axiosInstance from '../axios-instance';

export default function useQuery({ url, options = {} }) {
  const [queryState, setQueryState] = useState({
    data: null,
    pending: false,
    error: null,
  });

  console.log('queryState', queryState);
  console.log('url', url);

  async function fetchData() {
    setQueryState({
      data: null,
      pending: true,
      error: null,
    });

    try {
      const response = await axiosInstance(url, options);
      setQueryState({
          data: response.data,
          pending: false,
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
        pending: false,
      }));
    }

    console.log('queryState2', queryState);
  }

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return { refetchQuery: fetchData, ...queryState };
}
