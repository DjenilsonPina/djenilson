import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
      <body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">WebNet</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
          <a className="Home" href="site2/index.html" rel="noopener noreferrer">Entrar</a>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
</body>

    </div>
  );
}

export default App;
