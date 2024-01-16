import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Device from "./Computer";
import ExpandableCard from "./components/ExpandableCard";
import Navbar from "./components/Navbar";
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

  const isViewOpened = isProjectViewOpened || isAboutMeViewOpened;

  return (
    <>
      <main>
        <section
          className={`w-screen h-screen grid ${
            isViewOpened
              ? "grid grid-cols-1 grid-rows-[40px_1fr_0fr] gap-0 bg-[#041F1E] text-[#F7DBA7]"
              : "grid grid-cols-2 md:grid-cols-3 grid-rows-[40px_1fr_1fr] gap-4 bg-[#F7DBA7] text-[#041F1E]"
          } md:grid-rows-[60px_1fr] md:grid-rows transition-all p-4`}
        >
          <Navbar />
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
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 2000,
                  position: [2, 2, 4],
                }}
              >
                <Device isMobileVersion />
              </Canvas>
            </ExpandableCard>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
