import { Route, Routes } from "react-router-dom"
import { PlantScreen } from "../components/plant/PlantScreen"
import { HomeScreen } from "../components/Public/HomeScreen"
import { LoginScreen } from "../components/Public/LoginScreen"
import { ProductsScreen } from "../components/Public/ProductsScreen"
import { SignUpScreen } from "../components/Public/SignUpScreen"
import { PublicNavbar } from "../ui/PublicNavbar"



export const PublicRouter = () => {
     return (
          <>
               <PublicNavbar/>

                    <Routes>
                         <Route path="home" element={ <HomeScreen/> } />
                         <Route path="products" element={ <ProductsScreen/> } />
                         <Route path="login" element={ <LoginScreen/> } />
                         <Route path="signup" element={ <SignUpScreen/> } />
                         <Route path="products/plant/:plantId" element={ <PlantScreen isPublic='true'/> } />

                         <Route path="/*" element={ <HomeScreen/> } />

                    </Routes>
          </>
     )
}
