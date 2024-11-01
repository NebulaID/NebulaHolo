import { useState } from 'react';
import { useWallet } from "@/components/WalletContext";

function PersonalSign() {
  const { connected, walletClient, userAddress } = useWallet();

  const [isSigning, setIsSigning] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);

  const handleSignMessage = async () => {
    if (!connected || !walletClient) return; 

    setIsSigning(true);
    try {
      const message = "gm";
      
      const signedMessage = await walletClient?.signMessage({
        // @ts-ignore
        account: userAddress,
        message,
      });
      setSignature(signedMessage || null);
    } catch (error) {
      console.error('Error signing message:', error);
    } finally {
      setIsSigning(false); 
    }
  };

  return (
    <div className="p-4 rounded-md border-black border bg-white w-1/2">
      <h2 className="text-lg font-semibold mb-2">Signature</h2>

      <div className="text-center">
        {connected && walletClient && userAddress ? (
          <button
            onClick={handleSignMessage}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(60,28,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(60,28,1)]"
            disabled={isSigning} 
          >
            {isSigning ? 'Signing...' : 'Sign "gm"'}
          </button>
        ) : (
          <p className="mt-2 text-gray-600">Connect your wallet to sign.</p>
        )}
      </div>
      <p className="mt-2 text-gray-600 break-all">
        Signature: {signature ? signature : '<null>'}
      </p>
    </div>
  );
}

export default PersonalSign;