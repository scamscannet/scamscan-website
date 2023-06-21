"use client";

import {ReactNode, useCallback, useState} from 'react';
import Header from '../Header';
import VerticalNavigation from "@/app/[lang]/components/VerticalNavigation";

interface Props {
    children: ReactNode
}
export default function Layout(props: Props) {



    return (
        <main id="wrapper">
            <div className="wrapper-layout">
                <div className="wrapper-layout-sidebar">
                    <VerticalNavigation></VerticalNavigation>
                </div>
                <div className="wrapper-layout-body">
                    <Header></Header>
                    {props.children}
                </div>
            </div>
        </main>
    )
}