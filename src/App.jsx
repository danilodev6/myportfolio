import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <main className="w-full min-h-dvh">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
