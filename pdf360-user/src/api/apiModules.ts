import { apiPath } from '@/constants/apiPath';
import axiosInstance from './axiosInstance';

const apiModules = {
  getListPdfFiles: async () => {
    const response = await axiosInstance.get(apiPath.listPdfFiles.GET);

    return response.data;
  },
  getListCoordinates: async (pdfId: string) => {
    const response = await axiosInstance.get(apiPath.listCoordinates.GET(pdfId));

    return response.data;
  },
  getExportHtml: async (pdfId: string) => {
    const response = await axiosInstance.get(apiPath.exportHtml.GET(pdfId));

    return response.data;
  },
  uploadPdfFile: async (formData: FormData) => {
    const response = await axiosInstance.post(apiPath.listPdfFiles.POST, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  deletePdfFile: async (pdfId: string) => {
    const response = await axiosInstance.delete(apiPath.listPdfFiles.DELETE(pdfId));
    return response.data;
  },
};

export default apiModules;
