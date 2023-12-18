import React from 'react'
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import styles from './Accounts.module.scss'
import { fetchNui } from '../../../../hooks/fetchNui'

export const Accounts: React.FC<{
    accountId: any
    accountName: string
    accountBalance: number
    selectedAccount: any
    CharacterData: any
    setCharacterData: any
    accountType: any
    setDeleteAccount: any
}> = (props) => {
    const [AccountManageOpen, setAccountManageOpen] = React.useState(false);

    return (
        <div
            className={styles.accountCard}
            style={{
                border: props.accountId == props.selectedAccount.accountId ? '2px solid #fff' : ''
            }}
            onClick={() => {
                props.setCharacterData({
                    Name: props.CharacterData.Name,
                    StateId: props.CharacterData.StateId,
                    Cash: props.CharacterData.Cash,
                    selectedAccount: {
                        accountId: props.accountId,
                        accountType: props.accountType
                    },
                    Accounts: props.CharacterData.Accounts,
                })
                
                fetchNui('swapAccount', {
                    AccountId: props.accountId,
                    AccountType: props.accountType
                })
            }}
        >
            <div
                className={styles.accountInformation}
            >
                {props.accountType == 'Savings Account' &&
                    <>
                        <Tooltip
                            title={'Manage Savings Account'}
                            placement={'right'}
                            arrow
                        >
                            <IconButton
                                style={{
                                    position: "absolute",
                                    height: "3vh",
                                    width: "3vh",
                                    marginBottom: "1vh",
                                    right: "1vh"
                                }}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    if (props.selectedAccount.accountId == props.accountId) {
                                        setAccountManageOpen(true)
                                    }
                                }}
                            >
                                <i
                                    className={"fa-solid fa-cog"}
                                    style={{
                                        fontSize: "2vh",
                                        color: props.selectedAccount.accountId == props.accountId ? 'white' : 'grey'
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    </>
                }

                <span
                    className={styles.accountName}
                >
                    {props.accountName} | <span style={{
                        fontSize: '18px',
                        padding: '0 0 0',
                        color: 'grey'
                    }}> #{props.accountId} </span>

                    <span>
                        <span style={{
                            position: 'relative',

                            display: 'flex',
                            flexDirection: 'column',

                            top: '0'
                        }}>
                            <span style={{
                                fontSize: '18px',
                                padding: '0 0 0',
                                color: 'grey'
                            }}>
                                Balance: ${props.accountBalance}
                            </span>
                            <span style={{
                                fontSize: '16px',
                                padding: '0 0 0',
                                color: 'grey'
                            }}>
                                {props.accountType} Account
                            </span>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}