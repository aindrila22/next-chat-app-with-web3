import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-6">
        <Image
          className="object-contain rounded-full"
          src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          height={200}
          width={200}
        />
        <button
          onClick={() => authenticate()}
          className="bg-pink-800 font-medium rounded-lg animate-pulse p-5 text-xl"
        >
          Login to Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://images.unsplash.com/photo-1600004853937-857d1070d505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
