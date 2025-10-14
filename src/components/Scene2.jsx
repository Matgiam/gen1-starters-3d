import { Html } from "@react-three/drei";
import DATA from "../data/Pokemons.json";
import Squirtle from "./Squirtle";
import Wartortle from "./Wartortle";
import Blastoise from "./Blastoise";
import Platform from "./Round_platform";

function Scene2({ moveCameraTo,setPokemon }) {
  const pokeData = DATA.find((p) => p.pokemon === "Squirtle");

  return (
    <group>
      <Squirtle
        position={[0, -0.39, 0.2]}
        onClick={() => moveCameraTo(0, 0, 0)} 
      />
      <Platform position={[0, -0.435, -0.3]} />

      <Wartortle
        position={[-4, -0.39, -2]}
        onClick={() => moveCameraTo(-3.5, 0, -2.5)} 
      />
      <Platform position={[-4, -0.435, -2.3]} />

      <Blastoise
        position={[3.8, -0.39, -3]}
        onClick={() => moveCameraTo(4.5, 0.5, -2)}
      />
      <Platform position={[4, -0.435, -3]} />

      <Html distanceFactor={3} position={[-0.05, 0.1, 0.1]}>
        {/* <div className="name">
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
        </div> */}
        <div className="pokemon-button">
  					<button onClick={() => setPokemon("")}>Go Back</button>
        </div>
      </Html>
    </group>
  );
}

export default Scene2;
