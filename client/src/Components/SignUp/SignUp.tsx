import './SignUp.css'

export default function SignUp() {
    return(
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <form action="http://localhost:8080/user/signup" method="post" id='test-form'>
                <input type="text" name="name" placeholder= "name"/>
                <input type="email" name="email" placeholder= "email"/>
                <input type="password" name="password" placeholder= "password"/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}