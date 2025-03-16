import  { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import LoginPopup from "../components/LoginPopup";

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
                path : "login",
                element : <LoginPopup/>
            }
        ]
    }
])

export default router