import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import InfoBox from "../components/info-box";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex">
      <h1 className="flex-auto">ScamScan Blacklist Check</h1>
      <input type="text" className="flex-auto w-px" />
      <button className="flex-auto">{dictionary["blacklist"].checkDomain}</button>

      <InfoBox title={dictionary["blacklist"].infoBoxTitle} text={dictionary["blacklist"].infoBoxText} />
    </div>
  );
}
