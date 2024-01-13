import { useState } from "react";
import axios from "axios";

export default function Modal({ visible, onClose }) {
  const [file, setFile] = useState();
  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {})
      .catch((er) => console.log(er));
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm relative p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 dark:text-slate-100">
        <button onClick={onClose} className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Upload Your Files
        </h5>
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            className="px-3 py-2 m-2 bg-blue-800 text-white"
            type="button"
            onClick={upload}
          >
            Upload
          </button>
        </div>
        {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Connect with one of our available wallet providers or create a new
          one.
        </p> */}
        <ul className="my-4 space-y-3">
          <li>
            <span className="flex-1 ms-3 whitespace-nowrap">File One</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              Recent
            </span>
          </li>
          <li>
            <span className="flex-1 ms-3 whitespace-nowrap">File Two</span>
          </li>
          <li>
            <span className="flex-1 ms-3 whitespace-nowrap">File Three</span>
          </li>
          <li>
            <span className="flex-1 ms-3 whitespace-nowrap">File Four</span>
          </li>
          <li>
            <span className="flex-1 ms-3 whitespace-nowrap">File Five</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
