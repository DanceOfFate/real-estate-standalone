import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Signin} from "./pages/Signin.tsx";
import {SignUp} from "./pages/SignUp.tsx";
import {About} from "./pages/About.tsx";
import {Profile} from "./pages/Profile.tsx";
import {Header} from "./components/Header.tsx";
import {Toaster} from "react-hot-toast";

export const App = () => {
    return(
        <BrowserRouter>
            <Toaster />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}