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
                <div className={'img'} style={{
                    height: "80vh",
                    width: "100vw"
                }}>
                </div>
            </div>
          </GlobalProvider>
    )
}