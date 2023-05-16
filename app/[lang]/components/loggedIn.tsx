"use client";

import { useSession } from "next-auth/react";

export default function LoggedIn() {
  const { data: session } = useSession();
  return (
    <div>
      <p>Your are logged in as: {session?.user?.email ?? "not logged in"} </p>
    </div>
  );
}
