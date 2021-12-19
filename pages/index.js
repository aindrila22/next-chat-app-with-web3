import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center w-full ">
        <h1 className="text-4xl"> Welcome to metaverse Proj 1 </h1>
        <button
          onClick={logout}
          className="bg-black font-medium text-white p-4 rounded-md text-xl mt-10"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
