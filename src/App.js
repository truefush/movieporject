import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
    return (
      <BrowserRouter>
        <Route render = {props =>(
          <p>
            <Header {...props}/>
            <Routes/>
            <Footer/>
          </p>
        )}/>
      </BrowserRouter>
    );
}

export default App;
