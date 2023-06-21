// These styles apply to every route in the application
import { Locale, i18n } from "@/i18n-config";

/* Stylesheets */
import "../globals.css";
import "../../styles/local.scss"
/* Components */
import AuthContext from "./AuthContext";
import { getDictionary } from "@/get-dictionary";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <title>ScamScan</title>
      </head>
      <AuthContext>
        <body>
        <Layout>
            {children}
        </Layout>
        </body>
      </AuthContext>
    </html>
  );
}
