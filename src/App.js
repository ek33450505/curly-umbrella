import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';

function router (page) {
  switch (page) {
      case "contact":
        return <ContactForm />

      case "portfolio":
        return <Portfolio />

      default:
          return <About />
  }
}

function App() {
  const [selectedPage, setPage] = useState('home');

  return (
    <div>
      <Nav seletected={selectedPage} onSelect={setPage} />
      <main>
        {/* { <h1>{selectedPage}</h1> } */}

        { router(selectedPage) }
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
