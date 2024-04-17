import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Header/Navbar/Navbar";


const Register = () => {

    const { createUser, updateUserInformation } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, image, password } = data;

        
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const userInformation = result.user;
                toast.success('Account created successfully')
                reset();

                updateUserInformation(userInformation, name, image)
                    .then(() => {
                        console.log('Profile Updated')
                    })
                    .catch(error => {
                        console.error(error)
                    })

            })
            .catch(error => {
                console.error(error)
            })

    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-md p-8 space-y-3 rounded-lg mx-auto bg-gray-900 text-white">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-500 text-white focus:border-violet-400" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-700">Name is required</span>}
                    </div>

                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-100 focus:border-violet-400" {...register("password", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                    message: "You have to enter an UpperCase and an LoweCase letter in the password"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Length must be at least 6 character"
                                }
                            })} />

                        <span className="absolute top-8 right-2" onClick={() => setShowPassword(!showPassword)}>
                            <div className="text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </div>
                        </span>
                        {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-100 focus:border-violet-400" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-700">Email is required</span>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">photoURl</label>
                        <input type="text" name="photo" id="photo" placeholder="photourl" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-100 focus:border-violet-400" {...register("image")} />
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400">Already Here?
                    <Link to="/login" rel="noopener noreferrer" href="#" className="underline text-gray-100">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;