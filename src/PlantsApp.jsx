import { Provider } from "react-redux"
import { AppRouter } from "./routers/AppRouter.jsx"
import { store } from "./store/store"
import { Toaster } from 'react-hot-toast'


export const PlantsApp = () => {
     return (
          <div>
               <Provider store={store}>
                    <AppRouter/>
                    <Toaster position="bottom-right" />
               </Provider>
          </div>
     )
}
