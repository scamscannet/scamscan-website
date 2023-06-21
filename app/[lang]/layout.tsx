// These styles apply to every route in the application
import { Locale, i18n } from "@/i18n-config";

/* Stylesheets */
import "../globals.css";
import "../../styles/local.scss"

/* Components */
import AuthContext from "./AuthContext";
import { getDictionary } from "@/get-dictionary";
import Layout from "@/app/[lang]/components/Layout";
import {ReactNode} from "react";


type LayoutProps = {
    children: ReactNode;
    params: { lang: Locale }
};

export default async function Root(props: LayoutProps) {
  const dictionary = await getDictionary(props.params.lang);
  return (
    <html lang={props.params.lang}>
      <head>
        <title>ScamScan</title>
      </head>
      <AuthContext>
        <body>
        <Layout>
            {props.children}
        </Layout>
        </body>
      </AuthContext>
    </html>
  );
}
