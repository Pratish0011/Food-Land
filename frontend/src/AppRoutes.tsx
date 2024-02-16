import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout"
import HomePage from "./pages/HomePage"



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><HomePage/></Layout>}/>

        <Route path="/user-profile" element={<span>User Profile page</span>}/>

        <Route path="*" element={<Navigate to="/"/>}/>
       
    </Routes>
  )
}

export default AppRoutes