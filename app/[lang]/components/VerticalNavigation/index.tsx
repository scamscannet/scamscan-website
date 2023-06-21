import Link from "next/link";
import NavigationItem from "@/app/[lang]/components/VerticalNavigation/navigation-item";
import LetterIcon from "@/ui/icons/LetterIcon";
import HomeIcon from "@/ui/icons/HomeIcon";
import FlagIcon from "@/ui/icons/FlagIcon";
import EyeIcon from "@/ui/icons/EyeIcon";
import AvatarIcon from "@/ui/icons/AvatarIcon";

export default function VerticalNavigation(){

    return (
        <div className="navigation">
            <NavigationItem href={"#"} label="Home">
                <HomeIcon></HomeIcon>
            </NavigationItem>
            <NavigationItem href={"#"} label="Report">
                <FlagIcon></FlagIcon>
            </NavigationItem>
            <NavigationItem href={"#"} label="Insights">
                <EyeIcon></EyeIcon>
            </NavigationItem>
            <NavigationItem href={"#"} label="About Us">
                <AvatarIcon></AvatarIcon>
            </NavigationItem>
            <NavigationItem href={"#"} label="Contact">
                <LetterIcon></LetterIcon>
            </NavigationItem>

        </div>
    )
}