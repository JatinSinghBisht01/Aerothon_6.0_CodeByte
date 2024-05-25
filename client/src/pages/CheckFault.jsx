import { useState } from "react";
import instance from "../api/instance";
import { toast } from "react-toastify";
import { styles } from "../styles";

const CheckFault = () => {
  const [selectedFile, setSelectedFile] = useState(true);
  const [prediction, setPrediction] = useState(false);

  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    if (file) {
      setSelectedFile(file);

      try {
        const response = await instance.post("/api/predict", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Response:", response.data);
        setPrediction(true);
        toast.success("Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Error uploading file");
      }
    }
  };

  return (
    // from dotenv import load_dotenv

    // load_dotenv()

    // import streamlit as st
    // import os
    // import pathlib
    // import textwrap

    // import google.generativeai as genai

    // from IPython.display import display
    // from IPython.display import Markdown

    // os.getenv("GOOGLE_API_KEY")
    // genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

    // model = genai.GenerativeModel('gemini-pro')
    // chat = model.start_chat(history=[])
    // def get_gemini_response(question):

    //     response =chat.send_message(question,stream=True)
    //     return response

    // st.set_page_config(page_title="Q&A Demo")

    // st.header("Gemini Application")

    // input=st.text_input("Input: ",key="input")

    // submit=st.button("Ask the question")

    <>
      <div className="h-screen font-sans text-gray-900 bg-gradient-to-r from-sky-500 to-indigo-500 border-box">
        <div className="flex justify-center w-full mx-auto sm:max-w-lg py-20">
          {prediction == false ? (
            <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
              <div className="mt-10 mb-10 text-center">
                <h2 className="text-2xl font-semibold mb-2">
                  Upload your files
                </h2>
                <p className="text-xs text-gray-500">
                  File should be of format .png, .jpg, .jpeg
                </p>
                {/*               

from dotenv import load_dotenv

load_dotenv() 

import streamlit as st
import os
import pathlib
import textwrap

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown


os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])
def get_gemini_response(question):
    
    response =chat.send_message(question,stream=True)
    return response



st.set_page_config(page_title="Q&A Demo")

st.header("Gemini Application")

input=st.text_input("Input: ",key="input")


submit=st.button("Ask the question") */}
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
                  onChange={handleFileChange}
                />
                <label
                  for="file-upload"
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
                    {/* 
from dotenv import load_dotenv

load_dotenv() 

import streamlit as st
import os
import pathlib
import textwrap

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown


os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])
def get_gemini_response(question):
    
    response =chat.send_message(question,stream=True)
    return response



st.set_page_config(page_title="Q&A Demo")

st.header("Gemini Application")

input=st.text_input("Input: ",key="input")


submit=st.button("Ask the question") */}

                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                  </svg>
                </label>
              </form>
            </div>
          ) : (
            <>
              <div
                className="inset-0 flex 
                    items-center justify-center
                    text-white z-20"
              >
                <div className="text-center">
                  <h1 className={styles.sectionHeadText}>The output</h1>
                  <img
                    className="mx-auto h-200 w-200"
                    src="../../sampleOutput.jpg"
                    alt="Aircraft"
                  />
                </div>
              </div>

              <div>
                {/* <img
                  className="mx-auto h-200 w-auto"
                  src="../../sampleOutput.jpg"
                  alt="Aircraft"
                /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckFault;
