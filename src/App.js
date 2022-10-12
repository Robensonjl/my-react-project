import "./App.css";

function App() {
	const greeting = { name: "Robenson" };
	const mainGreet = <h1>Hello {greeting.name}!</h1>;
	const welcome = (
		<>
			{mainGreet}
			<h2>Welcome</h2>
		</>
	);
	return welcome;
}

export default App;
