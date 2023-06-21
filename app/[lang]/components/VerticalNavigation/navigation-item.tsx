import {usePathname} from "next/navigation";
import {ReactNode} from "react";
import Link from "next/link";

interface NavigationItemProps {
    children: ReactNode,
    href: string,
    label?: string
}

export default function NavigationItem(props: NavigationItemProps){
    const { pathname } = usePathname();

    return (
        <div className={`navigation-list-item ${pathname === props.href ? 'is-active' : ''}`}>
            <Link href={props.href}>
					<span className="link-icon">
						{props.children}
					</span>
                    {!!props.label ? <span className="link-title">{props.label}</span> : null}
            </Link>
        </div>
    )
}