import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../store/slices/AuthSlice";


const LoginContext = createContext()

function LoginProvider({ children }) {
    const { data: users, isLoading, isError } = useGetUserQuery()
    
    const navigate = useNavigate();

    const [alert, setAlert] = useState({
        show: false,
        message: "",
        variant: 'success'
    })

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setAlert({
                show: true,
                message: "Please enter username and password!",
                variant: "danger",
            });
            return;
        }

        const loginUser = users?.find(
            (user) =>
                user.username === formData.username &&
                user.password === formData.password
        );

        if (loginUser) {

            if (formData.rememberMe) {
                sessionStorage.setItem("isAuthenticated", "true");
                sessionStorage.setItem("username", loginUser.username);
                sessionStorage.setItem("password", loginUser.password);
            }

            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("name", loginUser.username);
            localStorage.setItem("password", loginUser.password);

            setAlert({
                show: true,
                message: "LOGIN SUCCESS!",
                variant: "success",
            });

            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);

        } else {

            setAlert({
                show: true,
                message: "LOGIN FAILED!",
                variant: "danger",
            });

        }
    };

    const passwordToggle = () => {
        setShowPassword(!showPassword)
    }

    const logoutUser = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('password')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('password')
        sessionStorage.removeItem("isAuthenticated");

        navigate('/')
        setAlert({
            show: true,
            message: "LOGOUT SUCCESS!",
            variant: "success"
        })
    }

    const valueToShare = {
        formData,
        setFormData,
        handleSubmit,
        showPassword,
        passwordToggle,
        alert,
        setAlert,
        logoutUser
    }

    return (
        <LoginContext.Provider value={valueToShare}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginProvider };
export default LoginContext;