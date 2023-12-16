import React from 'react';

import styles from "./Banking.module.scss";
import "./Components/Scroll.module.scss"

import { Slide } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 
import { DepositModal } from './Components/Modals/Deposit/DepositModal'; 
import { WithdrawModal } from './Components/Modals/Withdraw/WithdrawModal';
import { TransferModal } from './Components/Modals/Transfer/TransferModal';

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
                name: 'Aspect Dev',
                balance: 25000
            },
            {
                accountId: 2,
                name: '2k Dev',
                balance: 25000
            },
        ],
        BusinessAccounts: [
            {
                accountId: 3,
                name: 'Los Santos Police Department',
                balance: 250000
            },
            {
                accountId: 4,
                name: 'Blaine County Sheriffs Office',
                balance: 250000
            },
            {
                accountId: 5,
                name: 'San Andreas State Police',
                balance: 250000
            },
            {
                accountId: 6,
                name: 'San Andreas State Park Rangers',
                balance: 250000
            },
        ]
    })

    return (
        <Slide
            direction="up"
            in={Open}
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
                        businessaccounts={CharacterData.BusinessAccounts}
                        selectedAccount={CharacterData.selectedAccount}
                        setDepositModalState={setDepositModalOpen}
                        setWithdrawModalState={setWithdrawModalOpen}
                        setTransferModalState={setTransferModalOpen}
                    />
                </div>

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
        </Slide>
    )
}