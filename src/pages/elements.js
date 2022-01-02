import React from "react";
import {GlobalProvider} from "../context/GlobalState";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {TransactionList} from "../components/TransactionList";
import {AddTransaction} from "../components/AddTransaction";
import {Balance} from "../components/Balance";

export const Elements = () => {
    return (
        <GlobalProvider>
            <div className={'detalii'}>
            <button className={'btn-head1'} >
                <a href='/' >Prima pagina</a>
            </button>
              <div className={'container'}>
                    <h1>Detalii tranzactii:</h1>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
        </GlobalProvider>
    )
}