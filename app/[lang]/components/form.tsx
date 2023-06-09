"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/app/[lang]/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form({
  type,
  lang,
  dictionary,
}: {
  type: "login" | "register";
  lang: string;
  dictionary: {
    email: string;
    password: string;
    forgotPassword: string;
    noAccount: string;
    alreadyAccount: string;
    registerForFree: string;
    signInInstead: string;
    signUp: string;
    signIn: string;
    statusCreated: string;
  };
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            // @ts-ignore
          }).then(({ ok, error }) => {
            console.log(ok, error);
            setLoading(false);
            if (ok) {
              router.push("#");
            } else {
              setError(error);
              toast.error(error);
            }
          });
        } else {
          fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success(dictionary.statusCreated);
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              toast.error(await res.text());
            }
          });
        }
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          {dictionary.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="panic@thedis.co"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          {dictionary.password}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#808080" />
        ) : (
          <p>{type === "login" ? dictionary.signIn : dictionary.signUp}</p>
        )}
      </button>
      {error !== "" && (
        <p className="text-center text-sm text-red-600">{error}</p>
      )}
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          {dictionary.noAccount}{" "}
          <Link
            href={lang + "/register"}
            className="font-semibold text-gray-800"
          >
            {dictionary.registerForFree}
          </Link>{" "}
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          {dictionary.alreadyAccount}{" "}
          <Link href={lang + "/login"} className="font-semibold text-gray-800">
            {dictionary.signInInstead}
          </Link>{" "}
        </p>
      )}
      <button
        className={`${"border-black bg-black text-white hover:bg-white hover:text-black"} flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        onClick={() => {
          signIn("github");
        }}
      >
        Github
      </button>
    </form>
  );
}
