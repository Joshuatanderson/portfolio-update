import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Cards from './components/cards/Cards';
import ContactInfo from './components/ContactInfo';

const App: React.FC = () => {
  const [repos, setRepos] = useState()
  const getRecentRepos = async (userID: string) => {
    const config = {
      auth: {
        username: 'joshuatanderson',
        password: 'C@lypso77!',
      },
    };
    await axios.get(`https://api.github.com/users/${userID}/repos?sort=updated?username=${userID}`, config)
      .then(resp => setRepos(resp.data))
  }

  useEffect(() => {
    getRecentRepos('joshuatanderson')
  }, [])

  return (
    <div className="App">
      <Header />
      <AboutMe />
      {repos && <Cards count={3} repos={repos} />}
      <ContactInfo/>
    </div>
  );
}

export default App;
