import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { storage } from "../firebase/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import axios from "axios";
import BoundingBox from "../components/BoundingBox";

const CheckFault = () => {
  const [imgUrl, setImgUrl] = useState(null);

  const [prediction, setPrediction] = useState(null);
  const [loader, setLoader] = useState(false);

  const getPrediction = async (imgurl) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://detect.roboflow.com/temp1-xbnwi/1",
        params: {
          api_key: import.meta.env.VITE_SOME_ROBOFLOW_API,
          image: imgurl,
        },
      });
      console.log(response.data.predictions);
      return response.data.predictions;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = async () => {
      setLoader(true);

      const storageRef = ref(storage, `files/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);
        console.log('File uploaded successfully');
        const downloadURL = await getDownloadURL(snapshot.ref);
        setImgUrl(downloadURL);
        const prediction = await getPrediction(downloadURL);
        setPrediction(prediction);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <div className="h-screen font-sans text-gray-900 bg-gradient-to-r from-sky-500 to-indigo-500 border-box">
      <div className="flex justify-center w-full mx-auto sm:max-w-lg py-20">
        <ClipLoader color="#ffffff" loading={loader} size={150} />
        {prediction == null && !loader ? (
          <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div className="mt-10 mb-10 text-center">
              <h2 className="text-2xl font-semibold mb-2">
                Upload your files
              </h2>
              <p className="text-xs text-gray-500">
                File should be of format .png, .jpg, .jpeg
              </p>
            </div>
            <form
              action="#"
              className="relative w-4/5 h-32 max-w-xs mb-10 bg-white rounded-lg shadow-inner"
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={handleSubmit}
              />
              <label
                htmlFor="file-upload"
                className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
              >
                <p className="z-10 text-xs font-light text-center text-gray-500">
                  Drag & Drop your files here
                </p>
                <svg
                  className="z-10 w-8 h-8 text-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                </svg>
              </label>
            </form>
          </div>
        ) : (
          prediction && (
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <BoundingBox imageSrc={imgUrl} detections={prediction} />
              </div>
              <button
                className="mt-6 px-4 py-2 bg-white hover:bg-black text-black hover:text-white  font-semibold rounded-full shadow-md transition duration-700"
                onClick={() => setPrediction(null)}
              >
                Upload another image
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CheckFault;
