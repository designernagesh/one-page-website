import './App.scss';
import Header from './components/Header';
import Features from './pages/Features';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='f-heading'>
        <h2>Features</h2>
        <p>Some Features of the Software.</p>
      </div>
      <Features />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
