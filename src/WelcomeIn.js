import Greeting from "./Greeting";

function WelcomeIn() {
	const welcome = (
		<>
			<Greeting name="Robenson" adjective="funny" />
			<Greeting name="Anna" adjective="clever" />
			<Greeting />
			<h2>Welcome</h2>
		</>
	);
	return welcome;
}

export default WelcomeIn;
