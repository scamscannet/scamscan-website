import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LoggedIn from "./components/loggedIn";
import ReportWebsite from "./components/report-website";
import Card from "@/app/[lang]/components/Card";
import SearchForm from "@/app/[lang]/components/SearchForm";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card theme={1}>Chart1</Card>
      <Card theme={2}>Chart2</Card>
      <Card theme={3}>Chart3</Card>
      <Card theme={3}>Chart4</Card>
      <Card theme={1}>Chart4</Card>
      <Card theme={2}>Chart4</Card>
    </div>
  );
}
