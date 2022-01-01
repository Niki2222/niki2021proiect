import React from "react";
import './App.css';
import {Home} from "./pages/home";
import {Elements} from "./pages/elements";
import {NotFound} from "./pages/not-found";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Home />}/>
                  <Route path={'/elements'} element={<Elements />}/>
                  <Route path={'*'} element={<NotFound />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
