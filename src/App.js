//import React from 'react';
import './App.css';
import Sidenav from './components/Sidenav';
import Texteditor from './components/Texteditor'
import Header from './components/Header'

function App() {
  return (
    <div >
      <Sidenav/>
      <Header/>
      <div className="editor">
        <Texteditor />
      </div>
    </div>
  );
}

export default App;
