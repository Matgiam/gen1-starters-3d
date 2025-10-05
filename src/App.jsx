import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Squirtle from "./components/Squirtle";

function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 1], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
				<ambientLight intensity={0.5} />
				<Squirtle />
			</Canvas>
		</>
	);
}

export default App;
