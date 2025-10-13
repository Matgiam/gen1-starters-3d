import { useState } from "react";
import { Html } from "@react-three/drei";

import Squirtle from "./Squirtle";
import Charmander from "./Charmander";
import Bulbasaur from "./Bulbasaur";
import Platform from "./Round_platform";
import Charmeleon from "./Charmeleon";
import Charizard from "./Charizard";

import DATA from "../data/Pokemons.json";

function Scene() {
	const [pokemon, setPokemon] = useState("");

	if (pokemon === "") {
		return (
			<group>
				<Charmander position={[-0.7, -0.51, -0.3]} onClick={() => setPokemon("Charmander")} />
				<Squirtle position={[0, -0.4, 0]} onClick={() => setPokemon("Squirtle")} />
				<Bulbasaur position={[0.7, -0.4, -0.3]} onClick={() => setPokemon("Bulbasaur")} />
				<Platform position={[0, -0.435, -0.3]} />
			</group>
		);
	}
	if (pokemon === "Charmander") {
		const pokeData = DATA.find((p) => p.pokemon === "Charmander");
		return (
			<group>
				<Charmander position={[0, -0.51, 0.2]} />
				<Charmeleon position={[-4, -0.34, -2]} />
				<Charizard position={[4.3, -0.39, -3]} />
				<Platform position={[4, -0.435, -3]} />
				<Platform position={[-4, -0.435, -2]} />
				<Platform position={[0, -0.435, -0.3]} />
				<Html distanceFactor={3} position={[-0.05, 0.1, 0.1]}>
					<div className="name">
						<h2>{pokeData.pokemon}</h2>
					</div>
					<div className="description">
						<p>{pokeData.description}</p>
					</div>
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
					<div className="pokemon-button">
						<button onClick={() => setPokemon("")}>Go Back</button>
					</div>
				</Html>
			</group>
		);
	}
}

export default Scene;
