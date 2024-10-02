import apiModules from '@/api/apiModules';
import { useQuery } from '@tanstack/react-query';

const useGetListCoordinates = (pdfId: string) => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['list-coordinates', pdfId],
    queryFn: () => apiModules.getListCoordinates(pdfId),
    select: (data) => data.data,
  });

  return { data, isSuccess, isLoading, isError };
};

export default useGetListCoordinates;
