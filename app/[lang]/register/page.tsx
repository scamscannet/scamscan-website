import Image from "next/image";
import Form from "@/app/[lang]/components/form";
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function Login({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="#">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">
            {dictionary["register"].signUp}
          </h3>
          <p className="text-sm text-gray-500">
            {dictionary["register"].infoText}
          </p>
        </div>
        {/* <Form type="register" dictionary={dictionary["formLogin"]} lang={lang} /> */}
        <Form
          type="register"
          lang={lang}
          dictionary={dictionary["formLogin"]}
        />
      </div>
    </div>
  );
}
