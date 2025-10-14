import { useState } from "react";
import { Html } from "@react-three/drei";

import Squirtle from "./Squirtle";
import Charmander from "./Charmander";
import Bulbasaur from "./Bulbasaur";
import Platform from "./Round_platform";
import Charmeleon from "./Charmeleon";
import Charizard from "./Charizard";

import DATA from "../data/Pokemons.json";
import Scene1 from "./Scene1";

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
		return <Scene1 />;
	}
}

export default Scene;
