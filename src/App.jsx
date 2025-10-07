import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./index.css";
import Squirtle from "./components/Squirtle";
import Charmander from "./components/Charmander";
import Bulbasaur from "./components/Bulbasaur";
import Platform from "./components/Round_platform";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import DATA from "../src/data/Pokemons.json";

let globalRotation = 0;
function App() {
	const [pokemon, setPokemon] = useState("");
	console.log(pokemon);
	console.log(DATA);

	const Rotating = () => {
		const ref = useRef();

		useFrame(() => {
			if (ref.current) {
				globalRotation -= 0.001;
				ref.current.rotation.y = globalRotation;
			}
		});
	return (
		<group ref={ref}>
			{/* CASE 1: No Pokémon selected — show all three */}
			{pokemon === "" &&
				DATA.map((poke) => (
					<group key={poke.id}>
						{poke.pokemon === "Charmander" && (
							<Charmander onClick={() => setPokemon(poke.pokemon)} position={[-0.7, -0.51, -0.3]} />
						)}
						{poke.pokemon === "Squirtle" && (
							<Squirtle onClick={() => setPokemon(poke.pokemon)} position={[0, -0.4, 0]} />
						)}
						{poke.pokemon === "Bulbasaur" && (
							<Bulbasaur onClick={() => setPokemon(poke.pokemon)} position={[0.7, -0.4, -0.3]} />
						)}
					</group>
				))}

			{/* CASE 2: A Pokémon is selected — show only that one */}
			{pokemon !== "" &&
				DATA.filter((poke) => poke.pokemon === pokemon).map((poke) => (
					<group key={poke.id}>
						{poke.pokemon === "Charmander" && <Charmander position={[0, -0.51, 0]} />}
						{poke.pokemon === "Squirtle" && <Squirtle position={[0, -0.4, 0]} />}
						{poke.pokemon === "Bulbasaur" && <Bulbasaur position={[0, -0.4, 0]} />}

						<Html distanceFactor={5}>
							<div className="pokemon-details" key={poke.id}>
								<h2>{poke.pokemon}</h2>
								<p>{poke.description}</p>
								<p><strong>Type:</strong> {poke.type}</p>
								<p><strong>Height:</strong> {poke.height}</p>
								<p><strong>Weight:</strong> {poke.weight}</p>
								<p><strong>Weaknesses:</strong> {poke.weaknesses}</p>
								<button onClick={() => setPokemon("")}>Go Back</button>
							</div>
						</Html>
					</group>
				))}

			{/* ✅ Always show platform (only once) */}
			<Platform position={[0, -0.435, -0.3]} />
		</group>
	);
};


	return (
		<>
			<Canvas camera={{ position: [0, 0, 2], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
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
