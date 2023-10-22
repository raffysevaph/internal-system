"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const handleLogout = () => {
    axios.post("/api/logout").then((res) => {
      push("/login");
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>hello world</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
}
