import { useEffect, useState } from 'react';
import './App.css';
import Router from './components/common/Router';
import Header from './components/header/Header';
import { auth } from './firebase';
function App() {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName("")
    })
  }, [])


  return (
    <div className='app'>
      <Header userName={userName} />
      <Router />
    </div>
  );
}

export default App;
