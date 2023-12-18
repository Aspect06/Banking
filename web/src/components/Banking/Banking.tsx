import React from 'react';

import styles from "./Banking.module.scss";
import "./Components/Scroll.module.scss"

import { Zoom } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 

import { AccountCreation } from './Components/Modals/AccountCreation/AccountCreation';
import { DepositModal } from './Components/Modals/Deposit/DepositModal'; 
import { WithdrawModal } from './Components/Modals/Withdraw/WithdrawModal';
import { TransferModal } from './Components/Modals/Transfer/TransferModal';
import { DeleteAccount } from './Components/Modals/DeleteAccount/DeleteAccount'

import { Transactions } from './Components/Transactions/Transactions';

import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../hooks/fetchNui';

export const Banking: React.FC = () => {
    const [Open, setOpen] = React.useState(true);

    const [DepositModalOpen, setDepositModalOpen] = React.useState(false);
    const [WithdrawModalOpen, setWithdrawModalOpen] = React.useState(false);
    const [TransferModalOpen, setTransferModalOpen] = React.useState(false);
    const [DeleteAccountModal, setDeleteAccountModal] = React.useState(false);
    const [AccountCreationModalOpen, setAccountCreationModalOpen] = React.useState(false);

    const [CharacterData, setCharacterData] = React.useState({
        Name: 'Aspect Dev',
        StateId: 1,
        Cash: 250,
        savingsAvailable: false,
        selectedAccount: {
            accountId: 1,
            accountType: 'Personal Account',
        },
        Accounts: [
            {
                accountId: 1,
                accountType: 'Personal',
                name: 'James Williams',
                balance: 25000
            },
            {
                accountId: 2,
                accountType: 'Savings Account',
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

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                fetchNui("Banking:Close");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    useNuiEvent('Banking:setCharacterData', (data) => {
        setCharacterData(data)
    })

    useNuiEvent('Banking:Open', () => {
        setOpen(true)
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

                        setAccountCreationModalState={setAccountCreationModalOpen}
                        
                        CharacterData={CharacterData}
                        setCharacterData={setCharacterData}

                        setDeleteAccount={setDeleteAccountModal}
                    />
                </div>

                <Transactions
                    setDepositModal={setDepositModalOpen}
                    setWithdrawModal={setWithdrawModalOpen}
                    setTransferModal={setTransferModalOpen}
                />
                
                <AccountCreation
                    modalOpen={AccountCreationModalOpen}
                    setModalOpen={setAccountCreationModalOpen}
                />

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

                <DeleteAccount
                    modalOpen={DeleteAccountModal}
                    setModalOpen={setDeleteAccountModal}
                />
            </div>
        </Zoom>
    )
}