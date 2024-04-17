import { useForm } from "react-hook-form";
import Navbar from "./Header/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const UpdateProfile = () => {
    const { user, updateUserInformation } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: user.displayName,
            email: user.email,
            image: user.photoURL
        }
    })


    const onSubmit = (data) => {
        const { name, image } = data;


        updateUserInformation(user, name, image)
            .then(() => {
                console.log('Profile updated')
            })
            .catch()
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full max-w-md p-8 space-y-3 rounded-lg mx-auto bg-gray-900 text-white">
                <h1 className="text-2xl font-bold text-center">Update Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Username</label>
                        <input type="text" name="name" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-400 bg-gray-500 text-white focus:border-violet-400" {...register("name")} />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Email</label>
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-100 focus:border-violet-400" {...register("email")} />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">photoURl</label>
                        <input type="text" name="image" placeholder="photourl" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-500 text-gray-100 focus:border-violet-400" {...register("image")} />
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Save the changes</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;