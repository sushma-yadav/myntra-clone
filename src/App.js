import './App.css';
import Router from './components/common/Router';
import Header from './components/header/Header';
import Banner from './pages/banner/Banner';
function App() {
  return (
    <div className='app'>
      <Header />
      <Router />
    </div>
  );
}

export default App;
