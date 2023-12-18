import { useRef, useState } from "react";
import Experience from "./components/Experience";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nextSection, setNextSection] = useState(1);

  function handleNextSection() {
    if (!containerRef.current) return;
    const sectionLength = containerRef.current.children.length;
    const section = containerRef.current.children[nextSection];

    if (!section) return;
    setNextSection((prev) => (prev === sectionLength - 1 ? 0 : prev + 1));
    section.scrollIntoView({ behavior: "smooth" });
  }

  const isLastSection = nextSection === 0;

  return (
    <>
      <main ref={containerRef}>
        <section className="w-screen h-screen bg-gray-900"></section>
        <section className="w-screen h-screen bg-red-900"></section>
        <section ref={containerRef} className="w-screen h-screen bg-yellow-900">
          <Experience />
        </section>
      </main>
      <div
        className={`fixed bottom-5 right-5 w-20 h-20 rounded-xl 
        ${isLastSection ? "bg-blue-500" : "bg-green-500"}`}
        onClick={handleNextSection}
      ></div>
    </>
  );
}

export default App;
