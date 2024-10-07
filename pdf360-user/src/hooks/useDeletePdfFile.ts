import apiModules from '@/api/apiModules';
import { showErrorMessage, showSuccessMessage } from '@/utils/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useDeletePdfFile = (pdfId: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: () => apiModules.deletePdfFile(pdfId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`delete ${pdfId}`] });
      navigate('/');
      queryClient.invalidateQueries(['list-pdf']);
      showSuccessMessage('Delete PDF file successfully');
    },

    onError: () => {
      showErrorMessage('Delete PDF error');
    },
  });
  return { mutate, isLoading, isError, isSuccess };
};

export default useDeletePdfFile;
