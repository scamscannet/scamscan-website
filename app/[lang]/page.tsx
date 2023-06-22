import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LoggedIn from "./components/loggedIn";
import ReportWebsite from "./components/report-website";
import Card from "@/app/[lang]/components/Card";
import SearchForm from "@/app/[lang]/components/SearchForm";
import HalfPieChart from "@/ui/components/half-pie-chart";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card theme={1} title="Scam Database">
          <HalfPieChart labels={["Scam", "No Scam"]} data={[100, 700]} label={"Scam Ratio"}></HalfPieChart>
      </Card>
      <Card theme={2} title="New Domains (24h)">
          w
      </Card>
      <Card theme={3} title="Scam Ratio">
          w
      </Card>
      <Card theme={3} title="Chart1">Chart4</Card>
      <Card theme={1} title="Chart1">
          w
      </Card>
      <Card theme={2} title="Chart1">Chart4</Card>
    </div>
  );
}
