import { Canvas } from "@react-three/fiber";
import { GrDown, GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import Computer from "./Computer";
import ComputerScene from "./components/ComputerScene";
import DeviceScene from "./components/DeviceScene";

function App() {
  return (
    <>
      <main>
        <section className="w-screen h-screen flex items-center justify-center bg-[#000000] text-[#FCA311]">
          <nav className="w-full fixed flex justify-between items-center top-0 h-16">
            <span className="text-2xl p-4 bg-[#14213D] rounded-br-3xl border-r-2 border-b-2 border-[#FCA311]">
              Marius STEPHANY
            </span>
            <ul className="flex gap-10 justify-center items-center text-2xl uppercase">
              <li>Projects</li>
              <li>About me</li>
              <li>Contact</li>
            </ul>
            <ul className="flex gap-3 justify-center items-center p-4 h-full bg-[#14213D] rounded-bl-3xl border-l-2 border-b-2 border-[#FCA311]">
              <li>
                <GrMail size={24} />
              </li>
              <li>
                <GrLinkedin size={24} />
              </li>
              <li>
                <GrGithub size={24} />
              </li>
            </ul>
          </nav>
          <div className="h-full w-full bg-[#000000]">
            <Canvas
              className="touch-none"
              camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [0, 2, 7],
              }}
            >
              <Computer />
            </Canvas>
          </div>
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <button className="flex items-center justify-center gap-2 rounded-full border-[#FCA311] bg-[#14213D] border-2 uppercase p-4 text-xl">
              <GrDown />
              <span>Scroll down</span>
              <GrDown />
            </button>
          </div>
        </section>
        <section className="w-screen h-screen bg-gray-900">
          <Canvas
            className="touch-none"
            camera={{
              fov: 45,
              near: 0.1,
              far: 2000,
              position: [-4, 4, 4],
            }}
          >
            <ComputerScene />
          </Canvas>
        </section>
        <section className="w-screen h-screen bg-yellow-900">
          <Canvas
            className="touch-none"
            camera={{
              fov: 45,
              near: 0.1,
              far: 2000,
              position: [-3, 3, 3],
            }}
          >
            <DeviceScene />
          </Canvas>
        </section>
      </main>
    </>
  );
}

export default App;
