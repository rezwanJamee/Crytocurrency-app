import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Coindetails from './pages/Coindetails';
import Navbar from './components/Navbar';
import Trendingpage from './pages/Trendingpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* App bar */}
      <Navbar />

      {/* Page Routes*/}
      <div className='app-body'>
        <Switch>
          <Route exact path="/trending">
            <Trendingpage />
          </Route>
          <Route exact path="/coindetails/:name">
            <Coindetails />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
