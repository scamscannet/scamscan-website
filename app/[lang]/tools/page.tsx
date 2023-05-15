import { getDictionary } from "@/get-dictionary";
import en from "../../../dictionaries/en.json";
import { Locale } from "@/i18n-config";

export default async function Tools({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <ul>
        <li>{dictionary["tools"].title}</li>
        <li>{dictionary["tools"].subtitle}</li>
      </ul>
    </div>
  );
}
