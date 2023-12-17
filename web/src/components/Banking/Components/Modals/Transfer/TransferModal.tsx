import React from 'react'
import styles from '../Modal.module.scss'
import { Button, ButtonGroup, CircularProgress, InputAdornment, TextField, Typography, Zoom } from '@mui/material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export const TransferModal: React.FC<{
    modalOpen: boolean;
    setModalOpen: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);

    const [Amount, setAmount] = React.useState(0);
    const [Comment, setComment] = React.useState('');
    const [stateId, setStateId] = React.useState(0);

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
                            Transfer
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            label="StateId"
                            variant="outlined"
                            value={stateId}
                            onChange={(e) => {
                                setStateId(Number(e.target.value))
                            }}
                            style={{
                                marginTop: '9vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                            value={Amount}
                            onChange={(e) => {
                                setAmount(Number(e.target.value))
                            }}
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faDollarSign}/>
                                  </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Comment"
                            variant="outlined"
                            value={Comment}
                            onChange={(e) => {
                                setComment(e.target.value)
                            }}
                            multiline
                            rows={5}
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        />

                        <div
                            className={styles.ButtonContainer}
                        >
                            <ButtonGroup>
                                <Button
                                    variant="contained" color="error"
                                    onClick={() => {
                                        props.setModalOpen(false);
                                        setAmount(0);
                                        setComment('');
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
                                            props.setModalOpen(false);
                                            setLoading(false);
                                        }, 1500)
                                    }}
                                >
                                    Transfer
                                </Button>
                            </ButtonGroup>
                        </div>
                    </>
                }

                {Loading &&
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '3.5%'
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