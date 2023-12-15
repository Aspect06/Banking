import React from 'react';

import { useState } from "react";
import styles from "./Banking.module.scss";
import { Slide } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 

export const Banking: React.FC = () => {
    const [Open, setOpen] = useState(true);

    return (
        <Slide
            direction="up"
            in={Open}
            unmountOnExit
            mountOnEnter
        >
            <div
                className={styles.main}
            >
                <div
                    className={styles.Banking}
                >
                    <Header />
                    <Sidebar />
                </div>
            </div>
        </Slide>
    )
}