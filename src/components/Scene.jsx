import { useState } from "react";
import { Html } from "@react-three/drei";

import Squirtle from "./models/Squirtle";
import Charmander from "./models/Charmander";
import Bulbasaur from "./models/Bulbasaur";
import Platform from "./models/Round_platform";
import Charmeleon from "./models/Charmeleon";
import Charizard from "./models/Charizard";
import Scene2 from "./Scene2";
import DATA from "../data/Pokemons.json";
import Town from "./models/Town";
import Scene1 from "./Scene1";
import Scene3 from "./Scene3";

function Scene({ moveCameraTo }) {
	const [pokemon, setPokemon] = useState("");

	if (pokemon === "") {
		return (
			<group>
				<Charmander position={[-0.7, -0.51, -0.3]} onClick={() => setPokemon("Charmander")} />
				<Squirtle position={[0, -0.4, 0]} onClick={() => setPokemon("Squirtle")} />
				<Bulbasaur position={[0.7, -0.4, -0.3]} onClick={() => setPokemon("Bulbasaur")} />
				<Town position={[0.7, -0.4, -26.3]} />
				<Html distanceFactor={3} position={[-0.6, 0.8, 0.1]}>
					<div className="select-pokemon">
						<h2>Select a Pokemon</h2>
					</div>
				</Html>
			</group>
		);
	}
	if (pokemon === "Charmander") {
		return <Scene1 setPokemon={setPokemon} moveCameraTo={moveCameraTo} />;
	}
	if (pokemon === "Squirtle") {
		return <Scene2 setPokemon={setPokemon} moveCameraTo={moveCameraTo} />;
	}
	if (pokemon === "Bulbasaur") {
		return <Scene3 setPokemon={setPokemon} moveCameraTo={moveCameraTo} />;
	}
}

export default Scene;
