import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Squirtle from "./components/Squirtle";
import Charmander from "./components/Charmander";
import Bulbasaur from "./components/Bulbasaur";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 1.5], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
				<OrbitControls />
				<ambientLight intensity={0.5} />
				<directionalLight position={[0, 1, 1]} color={"#c10404"} intensity={2.5} />
				<directionalLight position={[-4, 4, 1]} color={"#9214d1"} intensity={2.5} />
				<Charmander position={[-0.7, -0.5, -0.2]} />
				<Squirtle position={[0, -0.4, 0]} />
				<Bulbasaur position={[0.7, -0.4, -0.2]} />
			</Canvas>
		</>
	);
}

export default App;
