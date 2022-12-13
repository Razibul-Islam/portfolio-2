import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "./particle.config";

const ParticleBackground = () => {
     const particlesInit = (engine) => {
       loadFull(engine);
     };
    return <Particles init={particlesInit} params={particleConfig}></Particles>;
};

export default ParticleBackground;