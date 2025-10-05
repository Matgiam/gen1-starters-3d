import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Squirtle from "./components/Squirtle";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 1], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
				<OrbitControls/>
				<ambientLight intensity={0.5} />
				<Squirtle position={[0, -0.4, 0]} />
			</Canvas>
		</>
	);
}

export default App;
