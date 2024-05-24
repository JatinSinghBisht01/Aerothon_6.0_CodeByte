import streamlit as st
import os
import textwrap
from dotenv import load_dotenv
import google.generativeai as genai
from IPython.display import display, Markdown


load_dotenv()


genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def get_gemini_response(question):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(question)
    return response.text


st.set_page_config(page_title="Q&A Demo", page_icon=":airplane:", layout="wide")


st.markdown(
    """
    <style>
    .main {
        background-color: #EEF7FF; 
        padding: 10px;
    }
    .stButton>button {
        color: white;
        background-color: #5AB2FF; 
        border: none;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s;
    }
    .stButton>button:hover {
        color: white;
        background-color: #0277BD;  
    }
    .stTextInput>div>div>input {
        border-radius: 8px;
        padding: 10px;
        border: 2px solid #0288D1;
    }
    .stHeader {
        color: #0288D1;  
    }
    .stSubheader {
        color: #000000;  
    }
    .stMarkdown {
        color: #000000;  
    }
    .custom-navbar {
        overflow: hidden;
        background-color: #57A6A1;
        width: 100%;
        z-index: 1000;
        margin-top: 56px; 
    }
    .custom-navbar a {
        float: right;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
    .custom-navbar a:hover {
        background-color: #577B8D;
        color: black;
    }
    .custom-navbar a.active {
        background-color: #577B8D;
        color: white;
    }
    .custom-navbar .logo {
        float: left;
        display: block;
        color: #57A6A1;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        background-color:white;
    }
    .custom-navbar .logo img {
        vertical-align: middle;
    }
    </style>
    <div class="custom-navbar">
        <a href="http://localhost:5173/contact">Feedback</a>
        <a href="/" class="active">Chatbot</a>
        <a href="http://localhost:5173/about">About Us</a>
        <a href="http://localhost:5173/home">Home</a>
        <a href="#logo" class="logo">AIRBUS</a>
    </div>
    """,
    unsafe_allow_html=True
)


st.header("Fault Recovery Techniques")


input_question = st.text_input("Write question: ", key="input")


submit = st.button("Ask the question")


if submit:
    response = get_gemini_response(input_question)
    st.subheader("Find your solution")
    st.write(response)
