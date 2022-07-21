import Hero from "./comps/Hero";
import Nav from "./comps/Nav";
import Home from "./pages/Home";
import Email from "./comps/Email";
function App() {
  return (
    <main className='main-body'>
      <div className='bg-curve'></div>
      <Nav />
      <Hero />
      <Home />
    </main>
  );
}

export default App;
