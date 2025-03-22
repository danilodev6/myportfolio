import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";

function App() {
  return (
    <>
      <main className="w-full min-h-dvh">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
