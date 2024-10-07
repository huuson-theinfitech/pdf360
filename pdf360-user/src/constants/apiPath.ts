export const apiPath = {
  listPdfFiles: {
    GET: '/pdf/list-pdf',
    POST: '/pdf/upload-pdf',
    DELETE: (pdfId: string) => `/pdf/delete-pdf/${pdfId}`,
  },
  listCoordinates: {
    GET: (pdfId: string) => `/pdf/${pdfId}/coordinates`,
  },
  exportHtml: {
    GET: (pdfId: string) => `/export-html/${pdfId}`,
  },
};
