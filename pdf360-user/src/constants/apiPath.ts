export const apiPath = {
  listPdfFiles: {
    GET: '/pdf/list-pdf',
    POST: '/pdf/upload-pdf',
  },
  listCoordinates: {
    GET: (pdfId: string) => `/pdf/${pdfId}/coordinates`,
  },
  exportHtml: {
    GET: (pdfId: string) => `/export-html/${pdfId}`,
  },
};
