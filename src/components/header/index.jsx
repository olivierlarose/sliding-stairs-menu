'use client';
import {useState} from 'react'
import styles from './style.module.scss';
import Burger from './burger';
import Stairs from './stairs';
import Menu from './menu';
import { AnimatePresence } from 'framer-motion';

export default function () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className={styles.header}>
            <Burger openMenu={() => {setMenuIsOpen(true)}}/>
            <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                </>
            }
            </AnimatePresence>
        </div>
    )
}
