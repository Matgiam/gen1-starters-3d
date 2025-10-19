import { useState } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import DATA from "../data/Pokemons.json";
import Squirtle from "./models/Squirtle";
import Charmander from "./models/Charmander";
import Bulbasaur from "./models/Bulbasaur";
import Town from "./models/Town";
import Platform from "./models/Round_platform";
import Charmeleon from "./models/Charmeleon";
import Charizard from "./models/Charizard";

function Scene1({ setPokemon, moveCameraTo }) {
	const pokeData = DATA.find((p) => p.pokemon === "Charmander");
	return (
		<group>
			<Charmander position={[0, -0.51, 0]} onClick={() => moveCameraTo(0, 0, 0)} />
			<Charmeleon position={[0, -0.34, -8]} onClick={() => moveCameraTo(0, 0, -8)} />
			<Charizard position={[4.3, -0.39, -11]} onClick={() => moveCameraTo(4.3, 0.5, -10)} />
			<Town position={[0.7, -0.4, -26.3]} />
			<Html distanceFactor={3} position={[-0.45, 0.8, 0.1]}>
				<div className="name">
					<h2>{pokeData.pokemon}</h2>
				</div>
			</Html>
			<Html distanceFactor={3} position={[-1.1, 0.3, 0.1]}>
				<div className="description">
					<p>{pokeData.description}</p>
				</div>
			</Html>
			<Html distanceFactor={3} position={[0.45, 0.3, 0.1]}>
				<div className="details">
					<p>
						<strong>Type:</strong> {pokeData.type}
					</p>
					<p>
						<strong>Height:</strong> {pokeData.height}
					</p>
					<p>
						<strong>Weight:</strong> {pokeData.weight}
					</p>
					<p>
						<strong>Weaknesses:</strong> {pokeData.weaknesses}
					</p>
				</div>
			</Html>
			<Html distanceFactor={3} position={[-0.2, -0.7, 0.3]}>
				<div className="pokemon-button">
					<button onClick={() => setPokemon("")}>
						<p>Go Back</p>
					</button>
				</div>
			</Html>
			<Html distanceFactor={5} position={[-1.3, 1, -8]}>
				<div className="evolution">
					<p>Evolves at level 18</p>
				</div>
			</Html>
			<Html distanceFactor={5} position={[0, 1.2, -8]}>
				<h2>Charmeleon</h2>
			</Html>
			<Html distanceFactor={5} position={[4.5, 1.5, -10]}>
				<div className="evolution">
					<p>Evolves at level 36</p>
				</div>
			</Html>
			<Html distanceFactor={5} position={[4, 1.8, -11]}>
				<h2>Charizard</h2>
			</Html>
		</group>
	);
}

export default Scene1;
