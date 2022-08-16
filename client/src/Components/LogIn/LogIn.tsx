import './LogIn.css'

export default function LogIn() {
    return(
        <div className='login-container'>
            <h1>Log In</h1>
            <form action="http://localhost:8080/user/login" method="post" id='test-form'>
                <input type="email" name="email" placeholder= "email"/>
                <input type="password" name="password" placeholder= "password"/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}