import {ReactNode} from "react";

interface CardProps {
    children: ReactNode,
    theme: number;
    title: string
}

export default function Card(props: CardProps){
    return (
        <>
            <div className={`card card-theme-${props.theme}`}>
                <div className="card-header">
                    <p className="card-header-title h-4">{props.title}</p>
                </div>
                <div className={`card-body`}>
                    {props.children}
                </div>
            </div>

        </>

    )
}