import  { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Login from "../components/Login";
import Registrasi from "../components/Registrasi";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyOTP from "../pages/VerifyOtp";
import ResetPassword from "../pages/ResetPassword";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "product",
                element : <ProductPage/>
            },
            {
                path : "registrasi",
                element : <Registrasi/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "verify-otp",
                element : <VerifyOTP/>
            },
            {
                path : "reset-password",
                element : <ResetPassword/>
            },
        ]
    }
])

export default router