'use client';
import PersonalSign from "@/components/PersonalSign";
import SwitchChains from "@/components/SwitchChains";
import { useWallet } from "@/components/WalletContext";

export default function Home() {
  
  const {
    connected,
    walletClient,
    userAddress,
  } = useWallet();
  
  return (
    <main className="flex flex-grow flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl flex flex-col items-center space-y-4 font-mono text-sm lg:flex">         
      {connected && walletClient && userAddress ? (
        <>
          <div className="p-4 rounded-md border-black border bg-white w-1/2">
            <h2 className="text-lg font-semibold mb-2">Address</h2>
            <p className="mt-2 text-gray-600 break-all">{userAddress}</p> 
          </div>        
          <PersonalSign />
          <SwitchChains />
        </>
      ) : ("Not connected")}
      </div>
    </main>
  );
}
