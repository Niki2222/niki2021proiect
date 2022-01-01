import React from "react";
import {GlobalProvider} from "../context/GlobalState";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {TransactionList} from "../components/TransactionList";
import {AddTransaction} from "../components/AddTransaction";
import {Balance} from "../components/Balance";

export const Elements = () => {
    return (
        <GlobalProvider>
            <div>
                <h4>All elements</h4>

              <div className={'container'}>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>

            </div>
        </GlobalProvider>
    )
}