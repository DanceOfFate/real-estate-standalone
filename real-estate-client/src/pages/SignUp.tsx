import React, {useState} from "react";
import {Link} from "react-router-dom";

export const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

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
                    id="username"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    className="border p-3 rounded-lg"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="border p-3 rounded-lg"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                />
                <button type="submit" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-90">
                    Sign up
                </button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-700">Sign in</span>
                </Link>
            </div>
        </div>
    )
}