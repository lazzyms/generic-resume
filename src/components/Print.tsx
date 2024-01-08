"use client";

import { classNames } from "@/utils/classNames";
import { saveAsPdf } from "@/utils/pdf";
import axios from "axios";
import { useState } from "react";

const Print = () => {
  const [loader, setLoader] = useState(false);
  const handleDownload = async () => {
    try {
      setLoader(true);
      const url = "https://resume.mauliksompura.in";
      const { data } = await axios.get(`/api/pdf?url=${url}`, {
        params: { url },
        responseType: "json",
      });
      const pdfData = atob(data.pdf);
      const pdfArray = new Uint8Array(pdfData.length);
      for (let i = 0; i < pdfData.length; i++) {
        pdfArray[i] = pdfData.charCodeAt(i);
      }
      // Create a Blob from the Uint8Array
      const blob = new Blob([pdfArray], { type: "application/pdf" });

      // Create a blob URL representing the PDF file
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");

      // Set the link's href to the blob URL
      link.href = blobUrl;

      // Set the download attribute to the desired file name
      link.download = "file.pdf";

      // Append the link to the body
      document.body.appendChild(link);

      // Simulate a click to download the file
      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };
  return (
    <>
      <div className="">
        <div className="print:hidden absolute right-2 top-2">
          <form onSubmit={handleDownload}>
            <button
              type="button"
              className={classNames(
                "border rounded-2xl px-3 py-0.5 text-black text-xs",
                loader ? "animate-pulse disabled" : ""
              )}
              onClick={handleDownload}
              {...(loader && { disabled: true })}
            >
              Download Resume
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Print;
