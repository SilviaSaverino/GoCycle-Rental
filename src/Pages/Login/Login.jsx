import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./Login.css"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [userErr, setUserErr] = React.useState(null)

    const location = useLocation()
    // console.log(location)

    React.useEffect(() => {
        async function checkLoginStatus() {
            try {
                const data = await loginUser(creds)
                setLoginFormData(data)
            }catch (error) {
                setUserErr(error)
            }finally{
                setIsLoggedIn(true)
            }
        }
            checkLoginStatus()
    },[])

    function handleSubmit(e) {
        e.preventDefault()
        console.log("user logged with success",loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state  ?
            <h1>{location.state.message }</h1>
            :
            <h1>Log in to your account</h1>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
            <p className="create-account">Don't have an account? <a href="#">Create one now</a></p>
        </div>
    )

}