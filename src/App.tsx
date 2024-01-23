import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import ComputerScene from "./components/ComputerScene";
import DeviceScene from "./components/DeviceScene";
import ExpandableCard from "./components/ExpandableCard";
import Icon from "./components/Icon";
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
    <main className="bg-primary">
      <section
        className={`w-screen h-screen grid ${
          isViewOpened
            ? "grid grid-cols-1 grid-rows-[1fr_0fr] gap-0"
            : "grid grid-cols-2 md:grid-cols-3 grid-rows-[1fr_1fr] gap-4 p-4"
        } md:grid-rows-1 transition-all`}
      >
        {!isViewOpened && <PresentationSection />}
        {!isAboutMeViewOpened && (
          <ExpandableCard
            title="Projects"
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
              <DeviceScene isViewMode={isProjectViewOpened} />
            </Canvas>
          </ExpandableCard>
        )}
        {!isProjectViewOpened && (
          <ExpandableCard
            title="About me"
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
              <ComputerScene isViewMode={isAboutMeViewOpened} />
            </Canvas>
          </ExpandableCard>
        )}
        {isViewOpened && (
          <div
            onClick={handleOpenHomeView}
            className="z-10 absolute bottom-5 left-5 w-10 h-10 transition-transform hover:scale-125 flex justify-center items-center rounded-full bg-primary cursor-pointer"
          >
            <Icon component={GrFormPrevious} sizeLabel="lg" color="secondary" />
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
