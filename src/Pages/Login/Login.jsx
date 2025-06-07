import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../../../apiTestUser"
import "./Login.css"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [userErr, setUserErr] = React.useState(null)

    const location = useLocation()
    // console.log(location)

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                console.log(data)
                setUserErr(null)
            })
            .catch(err => {
                setUserErr(err)
            }).finally(() => {
                setStatus("idle")
            })
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
            {location.state ?
                <h1>{location.state.message}</h1>
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
                 <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </form>
            {
                userErr?.message &&
                <p className="loginError">Ops! Something went wrong: <br /> <span className="error">{userErr.message}</span></p>
            }
            <p className="create-account">Don't have an account? <a href="#">Create one now</a></p>
        </div>
    )

}