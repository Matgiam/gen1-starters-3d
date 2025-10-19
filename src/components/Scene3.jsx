import { useState } from "react";
import { Html } from "@react-three/drei";
import DATA from "../data/Pokemons.json";
import Squirtle from "./Squirtle";
import Charmander from "./Charmander";
import Venusaur from "./Venusaur";
import Bulbasaur from "./Bulbasaur";
import Platform from "./Round_platform";
import Charmeleon from "./Charmeleon";
import Charizard from "./Charizard";
import Ivysaur from "./Ivysaur";

function Scene3({ setPokemon, moveCameraTo }) {
	const pokeData = DATA.find((p) => p.pokemon === "Bulbasaur");
	return (
		<group>
			<Bulbasaur position={[0, -0.39, 0]} onClick={() => moveCameraTo(0, 0, 0)} />
			<Ivysaur position={[-4, -0.39, -2]} onClick={() => moveCameraTo(-3.5, 0, -2.5)} />
			<Venusaur position={[4.3, -0.39, -3]} onClick={() => moveCameraTo(4.5, 0, -2)} />
			<Platform position={[4.3, -0.435, -3]} />
			<Platform position={[-4, -0.435, -2]} />
			<Platform position={[0, -0.435, -0.3]} />
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
			<Html distanceFactor={5} position={[-3.5, 1.5, -3.5]}>
				<div className="evolution">
					<p>Evolves at level 18</p>
				</div>
			</Html>
			<Html distanceFactor={5} position={[-3.7, 1, -1.7]}>
				<h2>Wartortle</h2>
			</Html>
			<Html distanceFactor={5} position={[5.5, 1.5, -2.5]}>
				<div className="evolution">
					<p>Evolves at level 36</p>
				</div>
			</Html>
			<Html distanceFactor={5} position={[4.1, 1.5, -2.3]}>
				<h2>Blastoise</h2>
			</Html>
		</group>
	);
}

export default Scene3;
