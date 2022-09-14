import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Coment from './components/Coment';
import Users from './components/Users';
import Follow from './components/Follow';
import Footer from './components/Footer';

function App() {
  return (

    <div className="App bg-light">
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
        <div class="col-6"><Coment /></div>
          <div class="col-6"><Follow /></div>
        </div>
        <div className='col-6'><Users /> </div>
        <div className='col-12'> <Footer /></div>
        
      </div>
    </div>
  );
}

export default App; 
