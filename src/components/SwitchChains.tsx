"use client";
import { useWallet } from "./WalletContext";

export default function SwitchChains() {
  const { currentNetwork, setCurrentNetwork, initializeWalletClient } = useWallet();

  const handleNetworkChange = (newNetwork: string) => {
    setCurrentNetwork(newNetwork); 
    initializeWalletClient(); 
  };

  return (
    <div className="p-4 rounded-md border-black border bg-white w-1/2">
      <h2 className="text-lg font-semibold mb-2">Switch Chains</h2>
      <p className="mb-2">Current Network: {currentNetwork}</p> 
      <div className="flex flex-wrap justify-center gap-2">
      <button
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(60,28,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(60,28,1)]"
          onClick={() => handleNetworkChange("mainnet")} 
        >
          Mainnet
        </button>
        <button
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(60,28,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(60,28,1)]"
          onClick={() => handleNetworkChange("sepolia")} 
        >
          Sepolia
        </button>
      </div>
    </div>
  );
}