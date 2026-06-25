import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginContext = createContext()

function Provider({ children }) {
    const navigate = useNavigate();

    const [alert,setAlert] = useState({
        show:false,
        message:"",
        variant:'success'
    })

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("data object", formData)

        if (
            formData.username === 'admin@admin.com'
            && formData.password === 'admin123') {
            if (formData.rememberMe === true) {
                sessionStorage.setItem('name', formData.username)
                sessionStorage.setItem('password', formData.password)
            }
            localStorage.setItem('name', formData.username)
            localStorage.setItem('password', formData.password)

            setAlert({
                show:true,
                message:"LOGIN SUCCESS!",
                variant:"success"
            })

            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
        } else {
           
            setAlert({
                show:true,
                message:"LOGIN FAILED!",
                variant:"danger"
            })

        }

    }

    const passwordToggle = () => {
        setShowPassword(!showPassword)
    }

    const valueToShare = {
        formData,
        setFormData,
        handleSubmit,
        showPassword,
        passwordToggle,
        alert,
        setAlert
    }

    return (
        <LoginContext.Provider value={valueToShare}>
            {children}
        </LoginContext.Provider>
    );
}

export { Provider };
export default LoginContext;