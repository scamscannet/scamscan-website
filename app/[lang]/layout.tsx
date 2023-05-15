// These styles apply to every route in the application
import { Locale, i18n } from "@/i18n-config";
import "../globals.css";
import AuthContext from "./AuthContext";
import Navbar from "./components/navbar";
import { getDictionary } from "@/get-dictionary";

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
          <Navbar dictionary={dictionary.navbar} lang={params.lang} />
          {children}
        </body>
      </AuthContext>
    </html>
  );
}
