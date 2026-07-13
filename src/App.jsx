import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Sidebar />

      <main className="lg:ml-72">
        <Home />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
        < Footer/>
      </main>
    </>
  );
}

export default App;