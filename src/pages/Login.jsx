import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSEO from "../hooks/useSEO";

const Login = () => {

    const { handleSubmit, register, formState: {errors}} = useForm();

    const navigate = useNavigate();

    useSEO({title: 'Login'});

    useEffect(() => {
        Swal.fire({
            title: "Access data",
            html: "<b>Email: </b>test@email.com<br><b>Password: </b>test123",
            icon: "info",
            confirmButtonText: "OK"
        })
    },[])

    const dataLogin = {
        email: "test@email.com",
        password: "test123"
    }

    const onSubmit = handleSubmit(data => {
        const {email, password} = data;
        if(email === dataLogin.email && password === dataLogin.password){
            navigate('/dashboard/new-sale')
        }else{
            Swal.fire({
                title: "Login failed",
                text: "Check email and password",
                icon: "error",
                confirmButtonText: "OK"
            })
            // <Alert title="Login failed" text="check email and password" icon="error"/>
        }
    })

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-blue-200 max-w-md w-full p-10 rounded-md'>
                <h1 className='text-2xl font-bold'>Login</h1>
                <form onSubmit={onSubmit}>
                    <input type="email" {...register("email", { required: true })} placeholder="Email" className='w-full bg-blue-50 text-black px-4 py-2 rounded-md my-2'/>
                    {errors.email && <p className='text-red-500'>Email is required</p>}
                    <input type="password" {...register("password", { required: true })} placeholder="Password" className='w-full bg-blue-50 text-black px-4 py-2 rounded-md my-2'/>
                    {errors.password && <p className='text-red-500'>Password is required</p>}
                    <button className='bg-blue-50 px-3 py-0.5 rounded-md hover:bg-blue-100 transition ease-out' type="submit">
                            Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;