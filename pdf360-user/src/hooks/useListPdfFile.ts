import apiModules from '@/api/apiModules';
import { useQuery } from '@tanstack/react-query';

const useGetListPdfFile = () => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['list-pdf'],
    queryFn: () => apiModules.getListPdfFiles(),
    select: (data) => data,
  });

  return { data, isSuccess, isLoading, isError };
};

export default useGetListPdfFile;
