import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LoggedIn from "./components/loggedIn";
import ReportWebsite from "./components/report-website";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
    </div>
  );
}
