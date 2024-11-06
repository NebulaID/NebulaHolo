"use client";
import React, { useEffect, useState } from 'react';
import { useWallet } from "@/components/WalletContext";

const HolonymCheck = () => {
    const [isUnique, setIsUnique] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {
        connected,
        walletClient,
        userAddress,
    } = useWallet();

    const walletAddress = userAddress;

    useEffect(() => {
        const checkSybilResistance = async () => {
            if (!walletAddress) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://api.holonym.io/sybil-resistance/gov-id/optimism?action-id=123456789&user=${walletAddress}`,
                    {
                        cache: 'no-store',
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch Holonym data');
                }

                const { result } = await response.json();
                setIsUnique(result);
            } catch (err) {
                console.error('Error checking Holonym:', err);
            } finally {
                setIsLoading(false);
            }
        };

        checkSybilResistance();
    }, [walletAddress]); // Effect runs when wallet address changes

    return (
        <div className="p-4 rounded-lg border">
            <h2 className="text-xl font-bold mb-4">Sybil Resistance Check</h2>

            {isLoading && (
                <div className="text-blue-600">
                    Checking wallet {walletAddress}...
                </div>
            )}

            {error && (
                <div className="text-red-600">
                    Error: {error}
                </div>
            )}

            {!isLoading && !error && isUnique !== null && (
                <div className={`font-medium ${isUnique ? 'text-green-600' : 'text-red-600'}`}>
                    This wallet is {isUnique ? 'unique' : 'not unique'} according to Holonym.
                </div>
            )}
        </div>
    );
};

export default HolonymCheck;