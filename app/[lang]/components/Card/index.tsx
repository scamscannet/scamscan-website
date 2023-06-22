import {ReactNode} from "react";

interface CardProps {
    children: ReactNode,
    theme: number;
}

export default function Card(props: CardProps){
    return (
        <div className={`card card-theme-${props.theme}`}>
            {props.children}
        </div>

    )
}