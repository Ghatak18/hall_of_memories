import { Route, Routes } from "react-router-dom";
import App from "./App";
import Form from "./form/Form";
import Register from "./form/Register";
import Login from "./form/Login";
import BeforeLogin from './pages/beforeLogin';
import AfterLogin from './pages/afterLogin';
import FinalPage from "./pages/finalPage";



const Routess = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<BeforeLogin/>}/>
            <Route path="/add" element={<Form/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/afterlogin" element={<AfterLogin/>}/>
            <Route path="/finalpage" element={<FinalPage/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}

        </Routes>
        </>
    );
};

export default Routess;

