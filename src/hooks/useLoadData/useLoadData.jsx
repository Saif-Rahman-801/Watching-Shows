import { useState, useEffect } from 'react';
import useAxiosPublic from '../axiosHooks/useAxiosPublic';

const useLoadData = () => {
  const [data, setData] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  return data;
}

export default useLoadData;
