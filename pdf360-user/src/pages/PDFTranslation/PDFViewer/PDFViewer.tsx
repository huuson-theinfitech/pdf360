import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDF = ({ fileName }: { fileName: string }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'>
      <Viewer
        withCredentials={false}
        defaultScale={SpecialZoomLevel.PageWidth}
        fileUrl={fileName}
        plugins={[defaultLayoutPluginInstance]}
      />
    </Worker>
  );
};

export default PDF;
