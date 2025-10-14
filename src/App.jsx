import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import Scene2 from "./components/Scene2";
import Scene from "./components/Scene";
import gsap from "gsap";

function App() {
	const controlsRef = useRef();
	const moveCameraTo = (x, y, z) => {
		gsap.to(controlsRef.current.target, {
			x,
			y,
			z,
			duration: 1.2,
			ease: "power2.out",
		});
	};

	return (
		<Canvas camera={{ position: [0, 1, 10], fov: 100 }} style={{ width: "100vw", height: "100vh" }}>
			<Environment files={"../images/clouds.jpeg"} background />
			<OrbitControls
				ref={controlsRef}
				// Limits how far the camera can tilt vertically (up/down)
				minPolarAngle={1.2} // Minimum vertical angle (prevents going too high)
				maxPolarAngle={1.7} // Maximum vertical angle (prevents going too low)
				// Limits how far the camera can rotate horizontally (left/right)
				// Negative = left, Positive = right
				minAzimuthAngle={-0.7} // Rotate limit to the left
				maxAzimuthAngle={0.7} // Rotate limit to the right
				// Controls zoom distance between camera and model
				minDistance={1.5} // How close you can zoom in
				maxDistance={1.5} // How far you can zoom out
				enablePan={false} //Disable the fact that you can drag the object
			/>
			<directionalLight position={[0, 1, 1]} color={"#c10404"} intensity={0.5} />
			<directionalLight position={[-4, 4, 1]} color={"#9214d1"} intensity={2.5} />
			<directionalLight position={[0, 4, -2]} color={"#af7500"} intensity={1.5} />
			<Scene moveCameraTo={moveCameraTo} />
		</Canvas>
	);
}

export default App;
