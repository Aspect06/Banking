import React from 'react';

import styles from "./Banking.module.scss";
import "./Components/Scroll.module.scss"

import { Zoom } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 
import { DepositModal } from './Components/Modals/Deposit/DepositModal'; 
import { WithdrawModal } from './Components/Modals/Withdraw/WithdrawModal';
import { TransferModal } from './Components/Modals/Transfer/TransferModal';
import { Transactions } from './Components/Transactions/Transactions';

export const Banking: React.FC = () => {
    const [Open, setOpen] = React.useState(true);

    const [DepositModalOpen, setDepositModalOpen] = React.useState(false);
    const [WithdrawModalOpen, setWithdrawModalOpen] = React.useState(false);
    const [TransferModalOpen, setTransferModalOpen] = React.useState(false);

    const [CharacterData, setCharacterData] = React.useState({
        Name: 'Aspect Dev',
        StateId: 1,
        Cash: 250,
        selectedAccount: 1,
        Accounts: [
            {
                accountId: 1,
                accountType: 'Personal',
                name: 'James Williams',
                balance: 25000
            },
            {
                accountId: 2,
                accountType: 'Savings',
                name: 'Big Booty Latinas',
                balance: 25000
            },
            {
                accountId: 3,
                accountType: 'Business',
                name: 'Burger Shot',
                balance: 25000
            },
            {
                accountId: 4,
                accountType: 'Government Fund',
                name: 'LEO Budget',
                balance: 125000
            },
        ],
    })

    return (
        <Zoom
            in={Open}
            timeout={750}
            unmountOnExit
            mountOnEnter
        >
            <div
                className={styles.App}
            >
                <div
                    className={styles.BankAppContainer}
                >
                    <Header
                        name={CharacterData.Name}
                        cash={CharacterData.Cash}
                    />

                    <Sidebar
                        accounts={CharacterData.Accounts}
                        selectedAccount={CharacterData.selectedAccount}
                        setDepositModalState={setDepositModalOpen}
                        setWithdrawModalState={setWithdrawModalOpen}
                        setTransferModalState={setTransferModalOpen}
                        CharacterData={CharacterData}
                        setCharacterData={setCharacterData}
                    />
                </div>

                <Transactions />

                <DepositModal
                    modalOpen={DepositModalOpen}
                    setModalOpen={setDepositModalOpen}
                />

                <WithdrawModal
                    modalOpen={WithdrawModalOpen}
                    setModalOpen={setWithdrawModalOpen}
                />

                <TransferModal
                    modalOpen={TransferModalOpen}
                    setModalOpen={setTransferModalOpen}
                />
            </div>
        </Zoom>
    )
}