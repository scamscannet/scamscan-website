import Link from "next/link";

export default function VerticalNavigation(){

    return (
        <div className="navigation">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Report</Link>
            <Link href={"#"}>Activity</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Contact</Link>

        </div>
    )
}