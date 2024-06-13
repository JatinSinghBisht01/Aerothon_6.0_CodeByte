import instance from "../api/instance";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { errorMessage: "", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        case "signout":
            return { token: null, errorMessage: "" };
        default:
            return state;
    }
};

const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clear_error_message" });
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await instance.post("/api/auth/signup", { email, password });
        localStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        return { success: true, message: response.data.message };
    } catch (err) {
        const errorMessage = err.response.data.error;
        dispatch({ type: "add_error", payload: errorMessage });
        return { success: false, error: errorMessage };
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        console.log(email, password);
        const response = await instance.post("/api/auth/signin", { email, password });
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        return { success: true, message: response.data.message };
    } catch (err) {
        const errorMessage = err.response.data.error;
        dispatch({ type: "add_error", payload: errorMessage });
        return { success: false, error: errorMessage };
    }
};

const signout = dispatch => async () => {
    try {
        const response = await instance.post("/api/auth/signout");
        localStorage.removeItem("token");
        dispatch({ type: "signout" });
        return { success: true, message: response.data.message };
    } catch (err) {
        dispatch({ type: "add_error", payload: "Something went wrong try again..." });
        return { success: false, error: "Something went wrong try again..." };
    }
};

const setErrorMessage = dispatch => errorMessage => {
    dispatch({ type: "add_error", payload: errorMessage });
};


export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signup, signout, isUserLoggedIn, clearErrorMessage, setErrorMessage },
    { token: null, errorMessage: "" }
);
