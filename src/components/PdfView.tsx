import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfView = ({ pdfUrl }) => (
  <div className="h-full overflow-auto">
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  </div>
);

export default PdfView;
