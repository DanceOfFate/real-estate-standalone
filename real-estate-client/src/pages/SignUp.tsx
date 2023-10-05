import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signup} from "../store/auth/actions.ts";
import {AppDispatch} from "../store";
import toast from "react-hot-toast";

export const SignUp: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        const response = await dispatch(signup({username, email, password}));
        console.log(response)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (response?.error?.message) {
            setErrorMessage("Signup failed. Try again");
            setLoading(false)
        }

        toast.success("User created successfully");
        navigate("/sign-in");
        setLoading(false);
    }


    return(
        <div className="p-3 max-2-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">
                Sign Up
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border p-3 rounded-lg"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    className="border p-3 rounded-lg"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="border p-3 rounded-lg"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={(loading || username==="" || email==="" || password==="")} type="submit" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-90">
                    Sign up
                </button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-700">
                        {loading ? "Loading..." : "Sign in"}
                    </span>
                </Link>
            </div>
            {errorMessage && <p className="text-red-500 mt-5">{errorMessage}</p>}
        </div>
    )
}