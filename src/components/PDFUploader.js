import React, { useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import uploadGif from "../assets/WdgNLLU10l.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFUploader = ({ pdfFile, setPdfFile }) => {
  const inputRef = useRef(null);

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
    }
  };

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="p-6 border-2 border-dashed mt-2 bg-white w-full max-w-l pdf-uploader-layout flex flex-col items-center justify-center">
      {!pdfFile ? (
        <>
          <h2 className="text-lg font-semibold">Upload your invoice</h2>
          <p className="text-gray-500">
            Top auto-populate fields and save time
          </p>
          <img src={uploadGif} alt="Upload GIF" className="my-4 w-24" />

          <input
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handlePdfUpload}
          />
          <button
            onClick={handleUploadClick}
            className="mt-2 p-3  text-black outline rounded"
          >
            Upload File &nbsp;
            <FontAwesomeIcon
              style={{
                color: "#000",
                height: 18,
                width: 18,
                cursor: "pointer",
              }}
              icon={faUpload}
            />
          </button>
          <p className="text-gray-400 mt-2">Click to upload or Drag and Drop</p>
        </>
      ) : (
        <div className="border p-2 max-h-[500px] overflow-auto w-full">
          <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
