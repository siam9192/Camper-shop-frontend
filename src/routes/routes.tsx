import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home/Home"
import Products from "../pages/Home/Products/Products"
import Product from "../pages/Product/Product"


const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"products/:id",
                element:<Product/>
            }
        ]
    }
])


export default router