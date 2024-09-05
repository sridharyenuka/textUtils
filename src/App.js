//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Form from './components/Form';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
    
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    // console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Routes>
          <Route index element={< TextForm heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
            
          {/* </Route> */}
          
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
        {/* </Route> */}
        
    </Routes>
   
    </div>
    
    </Router>  
    {/* <Form/> */}
    </>
  );
}

export default App;
