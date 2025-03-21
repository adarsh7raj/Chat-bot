import { Input } from "../components/input";
import { useState } from "react";
import { Signin_type, SigninSchema } from "@adarsh7/chat-app";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
//import axios from 'axios';



export const Signin = function() {
    const navigate = useNavigate();
    const [post_inputs, setPost] = useState<Signin_type>({ password: "", email: "" });
    const [error, setError] = useState<string | null>(null);
    //axios.defaults.withCredentials = true;
     function send_request() {
        // Validate inputs using SigninSchema
        const validationResult = SigninSchema.safeParse(post_inputs);

        if (!validationResult.success) {
            // Handle validation error
            setError(" invalid email or password(must be atleast 6 character long)");
            console.log("hi");
            console.error(validationResult.error.errors); // Log detailed errors
            return; // Stop further execution if validation fails
        }
else{
    setError(null);
    console.log("hi from else");
    alert("Signed in sucessfully");
    navigate("/chat");
}
       

           
   
      
    }

    return (
        <>
            <div className="h-screen flex items-center flex-col">
                <div className="text-4xl mt-[100px] font-bold">Sign in to your account</div>
                <div className="text-slate-400 mt-4">
                    Do not have an account? <Link className="underline hover:underline-offset-2" to="/signup">Signup</Link>
                </div>
                {error && <div className="text-red-500 mt-2">{error}</div>}
                <Input
                    label="Email"
                    placeholder="abc@gmail.com"
                    type="email"
                    OnChange={event => setPost(prev => ({ ...prev, email: event.target.value }))}
                />
                <Input
                    label="Password"
                    placeholder="password"
                    type="password"
                    OnChange={event => setPost(prev => ({ ...prev, password: event.target.value }))}
                />
                <Button name="Signin" OnClick={send_request} className={"w-[380px] bg-black text-white mt-[30px] py-2 px-4 rounded-lg hover:bg-gray-800"} />
            </div>
        </>
    );
};
