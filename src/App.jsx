import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Squirtle from "./components/Squirtle";
import Charmander from "./components/Charmander";
import Bulbasaur from "./components/Bulbasaur";
import Platform from "./components/Round_platform";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 1.5], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
				<OrbitControls
					// Limits how far the camera can tilt vertically (up/down)
					minPolarAngle={0.7} // Minimum vertical angle (prevents going too high)
					maxPolarAngle={1.7} // Maximum vertical angle (prevents going too low)
					// Limits how far the camera can rotate horizontally (left/right)
					// Negative = left, Positive = right
					minAzimuthAngle={-0.7} // Rotate limit to the left
					maxAzimuthAngle={0.7} // Rotate limit to the right
					// Controls zoom distance between camera and model
					minDistance={1} // How close you can zoom in
					maxDistance={2} // How far you can zoom out
				/>
				<ambientLight intensity={0.5} />
				<directionalLight position={[0, 1, 1]} color={"#c10404"} intensity={2.5} />
				<directionalLight position={[-4, 4, 1]} color={"#9214d1"} intensity={2.5} />
				<Charmander position={[-0.7, -0.51, -0.2]} />
				<Squirtle position={[0, -0.4, 0]} />
				<Bulbasaur position={[0.7, -0.4, -0.2]} />
				<Platform position={[0, -0.435, -0.4]} />
			</Canvas>
		</>
	);
}

export default App;
