import apiModules from '@/api/apiModules';
import { useQuery } from '@tanstack/react-query';

const useGetHtmlFile = (pdfId: string) => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['html-file', pdfId],
    queryFn: () => apiModules.getExportHtml(pdfId),
    select: (data) => data.data,
  });

  return { data, isSuccess, isLoading, isError };
};

export default useGetHtmlFile;
