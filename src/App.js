import "./App.css";

function Greeting() {
	const greeting = { name: "Robenson" };
	const mainGreet = <h1>Hello {greeting.name}!</h1>;
	return mainGreet;
}

function WelcomeIn() {
	const welcome = (
		<>
			<Greeting />
			<h2>Welcome</h2>
		</>
	);
	return welcome;
}

function App() {
	return (
		<WelcomeIn />
	); /*functions thrown into the exported component need to be capitalized */
}

export default App;
