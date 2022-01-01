import React from "react";
import {GlobalProvider} from "../context/GlobalState";
import {Header} from "../components/Header";


export const Home = () => {
      return (
          <GlobalProvider>
            <div>
                <h4>Home Page</h4>
                <div className={'header'}>
                <Header />

                </div>
            </div>
          </GlobalProvider>
    )
}