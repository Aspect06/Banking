import React from 'react'
import styles from '../Modal.module.scss'

import { Button, ButtonGroup, CircularProgress, InputAdornment, TextField, Typography, Zoom } from '@mui/material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export const AccountCreation: React.FC<{
    modalOpen: boolean;
    setModalOpen: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);

    const [AccountName, setAccountName] = React.useState('');

    return (
        <Zoom
            in={props.modalOpen}
            timeout={320}
        >
            <div
                className={styles.Wrapper}
            >
                {!Loading &&
                    <>
                        <Typography
                            className={styles.ModalHeader}
                        >
                            Create Account
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            label="Account Name"
                            variant="outlined"
                            value={AccountName}
                            onChange={(e) => {
                                setAccountName(e.target.value)
                            }}

                            style={{
                                marginTop: '9vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        />

                        <div>
                            <div
                                className={styles.ButtonContainer}
                            >
                                <ButtonGroup>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            props.setModalOpen(false);
                                            setAccountName('');
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            setLoading(true);

                                            setTimeout(() => {
                                                setLoading(false);
                                            }, 1000)
                                        }}
                                    >
                                        Create
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </>
                }

                {Loading &&
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '3%'
                        }}
                    >
                        <div>
                            <CircularProgress
                                size={100}
                            />
                        </div>
                    </div>
                }
            </div>
        </Zoom>
    )
}