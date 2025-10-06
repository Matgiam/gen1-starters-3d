import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./index.css";
import Squirtle from "./components/Squirtle";
import Charmander from "./components/Charmander";
import Bulbasaur from "./components/Bulbasaur";
import Platform from "./components/Round_platform";
import { OrbitControls, Environment, Html } from "@react-three/drei";

function App() {
	const [pokemon, setPokemon] = useState("");

	console.log(pokemon);
	const Rotating = () => {
		const ref = useRef();
		// useFrame(() => {
		// 	if (ref.current) {
		// 		ref.current.rotation.y -= 0.001;
		// 	}
		// });
		return (
			<mesh ref={ref}>
				{pokemon == "" && (
					<>
						<Charmander onClick={() => setPokemon("Charmander")} position={[-0.7, -0.51, -0.3]} />
						<Squirtle onClick={() => setPokemon("Squirtle")} position={[0, -0.4, 0]} />
						<Bulbasaur onClick={() => setPokemon("Bulbasaur")} position={[0.7, -0.4, -0.3]} />
						<Platform position={[0, -0.435, -0.2]} />
					</>
				)}
				{pokemon == "Charmander" && (
					<>
						<Charmander onClick={() => setPokemon("Charmander")} position={[0, -0.51, 0]} />
						<Platform position={[0, -0.435, -0.2]} />
						<Html>
							<button onClick={() => setPokemon("")}>go back</button>
						</Html>
					</>
				)}
				{pokemon == "Squirtle" && (
					<>
						<Squirtle onClick={() => setPokemon("Squirtle")} position={[0, -0.4, 0]} />
						<Platform position={[0, -0.435, -0.2]} />
						<Html>
							<button onClick={() => setPokemon("")}>go back</button>
						</Html>
					</>
				)}
				{pokemon == "Bulbasaur" && (
					<>
						<Bulbasaur onClick={() => setPokemon("Bulbasaur")} position={[0, -0.4, -0]} />
						<Platform position={[0, -0.435, -0.2]} />
						<Html>
							<button onClick={() => setPokemon("")}>go back</button>
						</Html>
					</>
				)}
			</mesh>
		);
	};

	return (
		<>
			<Canvas camera={{ position: [0, 0, 1.7], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
				<Environment files={"../images/clouds.jpeg"} background blur={0.1} backgroundRotation={[0, 1, 0]} />
				<OrbitControls
					// Limits how far the camera can tilt vertically (up/down)
					minPolarAngle={1.2} // Minimum vertical angle (prevents going too high)
					maxPolarAngle={1.7} // Maximum vertical angle (prevents going too low)
					// Limits how far the camera can rotate horizontally (left/right)
					// Negative = left, Positive = right
					minAzimuthAngle={-0.7} // Rotate limit to the left
					maxAzimuthAngle={0.7} // Rotate limit to the right
					// Controls zoom distance between camera and model
					minDistance={1} // How close you can zoom in
					maxDistance={2.5} // How far you can zoom out
					enablePan={false} //Disable the fact that you can drag the object
				/>

				<directionalLight position={[0, 1, 1]} color={"#c10404"} intensity={0.5} />
				<directionalLight position={[-4, 4, 1]} color={"#9214d1"} intensity={2.5} />
				<directionalLight position={[0, 4, -2]} color={"#af7500"} intensity={1.5} />
				<Rotating />
			</Canvas>
		</>
	);
}

export default App;
