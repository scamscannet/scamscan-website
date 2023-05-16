import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default async function VerifyEmail({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const router = useRouter();
  const dictionary = await getDictionary(lang);
  const token = useParams()?.token || "";
  const verifyStatus = fetch("/api/auth/verify-email", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  }).then(async (res) => {
    if (res.status === 200) {
      toast.success(dictionary.statusCreated);
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      const error = await res.json();
      toast.error(error.message);
    }
  });

  return (
    <div>
    </div>
  );
}
