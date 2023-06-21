"use client";

import {ReactNode, useCallback, useState} from 'react';
import Header from '../Header/index';

interface Props {
    children: ReactNode
}
export default function Layout(props: Props) {



    return (
        <main id="wrapper">
            <div className="wrapper-layout">
                <div className="wrapper-layout-sidebar">
                </div>
                <div className="wrapper-layout-body">
                    <Header></Header>
                    {props.children}
                </div>
            </div>
        </main>
    )
}