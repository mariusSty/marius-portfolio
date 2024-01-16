import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import Device from "./Computer";
import ComputerScene from "./components/ComputerScene";
import ExpandableCard from "./components/ExpandableCard";
import PresentationSection from "./components/PresentationSection";

function App() {
  const [isProjectViewOpened, setIsProjectViewOpened] = useState(false);
  const [isAboutMeViewOpened, setIsAboutMeViewOpened] = useState(false);

  const handleOpenProjectView = () => {
    setIsProjectViewOpened(true);
  };

  const handleOpenAboutMeView = () => {
    setIsAboutMeViewOpened(true);
  };

  const handleOpenHomeView = () => {
    setIsProjectViewOpened(false);
    setIsAboutMeViewOpened(false);
  };

  const isViewOpened = isProjectViewOpened || isAboutMeViewOpened;

  return (
    <>
      <main>
        <section
          className={`w-screen h-screen grid ${
            isViewOpened
              ? "grid grid-cols-1 grid-rows-[1fr_0fr] gap-0 bg-[#1C3144] text-[#A2AEBB]"
              : "grid grid-cols-2 md:grid-cols-3 grid-rows-[1fr_1fr] gap-4 text-[#1C3144]"
          } md:grid-rows-1 transition-all p-4`}
        >
          {!isViewOpened && (
            <div className="flex flex-col justify-evenly items-center col-span-2 md:col-span-1">
              <PresentationSection />
            </div>
          )}
          {!isAboutMeViewOpened && (
            <ExpandableCard
              isViewOpened={isProjectViewOpened}
              handleOpenView={handleOpenProjectView}
            >
              <Canvas
                resize={{ debounce: 0 }}
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 2000,
                  position: [2, 2, 4],
                }}
              >
                <Device />
              </Canvas>
            </ExpandableCard>
          )}
          {!isProjectViewOpened && (
            <ExpandableCard
              isViewOpened={isAboutMeViewOpened}
              handleOpenView={handleOpenAboutMeView}
            >
              <Canvas
                resize={{ debounce: 0 }}
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 2000,
                  position: [-5, 3, 1],
                }}
              >
                <ComputerScene />
              </Canvas>
            </ExpandableCard>
          )}
          {isViewOpened && (
            <div
              onClick={handleOpenHomeView}
              className="absolute bottom-5 left-5 w-10 h-10 transition-transform hover:scale-125 flex justify-center items-center rounded-full bg-[#A2AEBB] text-[#1C3144] cursor-pointer"
            >
              <GrFormPrevious size={32} />
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
