import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas } from "@react-three/fiber";

function Squirtle() {
	const gltf = useLoader(GLTFLoader, "/models/squirtle.glb");
	return <primitive object={gltf.scene} />;
}

export default Squirtle;
