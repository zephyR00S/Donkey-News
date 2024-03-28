import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  

  const [progress, setProgress] = useState(0)


  
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar color="white" height={3} progress={progress} loaderSpeed={1000} transitionTime={400} />
          <Routes>
            <Route
              path="/general"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  country="in"
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  country="in"
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress = {setProgress} 
                  pageSize={8} 
                  country="in"
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App