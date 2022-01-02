import React from "react";
import {GlobalProvider} from "../context/GlobalState";
import {Header} from "../components/Header";

export const Home = () => {
      return (
          <GlobalProvider>
            <div >
                <div className={'header'}>
                    <Header />
                </div>
                <button className={'btn-head1'} >
                    <a href='/elements' >DETALII</a>
                </button>
            </div>
          </GlobalProvider>
    )
}