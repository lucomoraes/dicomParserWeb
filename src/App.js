//'src/App.js'

import React, { Component } from 'react';
import './App.css';

// Importanto o novo componente DicomHeader
import DicomHeader from './components/DicomHeader'

class App extends Component {
  render() {
    
    //Estilo do header
    const headerStyle = {
      background: "#2b3044",      
      fontSize: "50px",     
      marginLeft: "15px",
      color: "#FFFFFF"

    }

    //Estilo da sessão principal da aplicação
    return (
      <div className="App">      
        <header style={headerStyle}>Visualizador Tags Dicom</header>
        <div>           
           <DicomHeader />
        </div>
      </div>
    );
  }
}

//Exportando componente
export default App;