import apiModules from '@/api/apiModules';
import { showErrorMessage, showSuccessMessage } from '@/utils/toastMessage';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUploadPdf = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: apiModules.uploadPdfFile,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['uploadPdf'] });
      queryClient.invalidateQueries(['list-pdf']);
      showSuccessMessage('Upload PDF file successfully');
    },

    onError: () => {
      showErrorMessage('Upload PDF file error');
    },
  });

  return { mutate, isLoading, isSuccess, isError };
};

export default useUploadPdf;
