import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import Squirtle from "./Squirtle";
import Charmander from "./Charmander";
import Bulbasaur from "./Bulbasaur";
import Platform from "./Round_platform";
import DATA from "../data/Pokemons.json";

function Scene() {
	const [pokemon, setPokemon] = useState("");
	console.log(pokemon);
	console.log(DATA);


	return (
		<group>
			<mesh>
				{/* Loop through all Pokémon from JSON file */}
				{DATA.map((poke) => (
					<group key={poke.id}>
						{/* CASE 1: NO Pokémon is selected */}
						{pokemon === "" && (
							<>
								{/* Show all Pokémon */}
								{poke.pokemon === "Charmander" && (
									<Charmander key={poke.id} onClick={() => setPokemon(poke.pokemon)} position={[-0.7, -0.51, -0.3]} />
								)}

								{poke.pokemon === "Squirtle" && <Squirtle key={poke.id} onClick={() => setPokemon(poke.pokemon)} position={[0, -0.4, 0]} />}

								{poke.pokemon === "Bulbasaur" && <Bulbasaur key={poke.id} onClick={() => setPokemon(poke.pokemon)} position={[0.7, -0.4, -0.3]} />}
							</>
						)}

						{/*  CASE 2: A Pokémon IS selected*/}
						{pokemon === poke.pokemon && (
							<>
								{/* Show ONLY the selected Pokémon in the center */}
								{poke.pokemon === "Charmander" && <Charmander position={[0, -0.51, 0]} />}
								{poke.pokemon === "Squirtle" && <Squirtle position={[0, -0.4, 0]} />}
								{poke.pokemon === "Bulbasaur" && <Bulbasaur position={[0, -0.4, 0]} />}

								{/* Add the round platform under the Pokémon */}
								<Platform position={[0, -0.435, -0.3]} />

								<Html distanceFactor={5}>
									<div className="pokemon-details" key={poke.id}>
										<h2>{poke.pokemon}</h2>

										<p>{poke.description}</p>
										<p>
											<strong>Type:</strong> {poke.type}
										</p>
										<p>
											<strong>Height:</strong> {poke.height}
										</p>
										<p>
											<strong>Weight:</strong> {poke.weight}
										</p>
										<p>
											<strong>Weaknesses:</strong> {poke.weaknesses}
										</p>

										{/* Button to go back to all Pokémon view */}
										<button onClick={() => setPokemon("")}>Go Back</button>
									</div>
								</Html>
							</>
						)}
					</group>
				))}

				{/* PLATFORM under all Pokémon (only when none is selected) */}
				{pokemon === "" && <Platform position={[0, -0.435, -0.3]} />}
			</mesh>
		</group>
	);
}

export default Scene;
