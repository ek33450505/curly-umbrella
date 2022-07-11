import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Home from './components/Home';


// Eli, the TA helped with the router
function router (page) {
  switch (page) {
      case "contact":
        return <ContactForm />

      case "portfolio":
        return <Portfolio />

      case "about":
        return <About />

      default:
          return <Home />
  }
}

function App() {
  const [selectedPage, setPage] = useState('home');

  return (
    <div>
      <Nav seletected={selectedPage} onSelect={setPage} />
      <main>
        {/* this will cause a header to appear on each page other than what is written - need to remove}
        {/* { <h1>{selectedPage}</h1> } */}

        { router(selectedPage) }
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
