"use client";
import { useRouter, usePathname } from "next/navigation";
import { Locale, i18n } from "@/i18n-config";

export default function LocaleSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const { push } = useRouter();

  const handleLocaleChange = (e: string) => {
    push(redirectedPathName(e));
  };

  return (
    <div>
      <select
        name="locale"
        id="locale-switcher"
        value={currentLocale}
        onChange={(e) => handleLocaleChange(e.target.value)}
      >
        {i18n.locales.map((locale) => {
          return <option key={locale}>{locale}</option>;
        })}
      </select>
    </div>
  );
}
