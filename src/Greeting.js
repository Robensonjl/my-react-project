function Greeting({ name = "valued customer", adjective = "nice" }) {
	const mainGreet = (
		<h1>
			Hello {adjective} {name}!
		</h1>
	);
	return mainGreet;
}

export default Greeting;
