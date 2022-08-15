import './App.css';

function App() {
  return (
    <div className="App">
      <form action="http://localhost:8080/user/login" method="post" id='test-form'>
        <input type="email" name="email" placeholder= "email"/>
        <input type="password" name="password" placeholder= "password"/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
