"use client";
import React from 'react';
import { useWallet } from "@/components/WalletContext";
import Link from 'next/link';
import PersonalSign from "@/components/PersonalSign";
import SwitchChains from "@/components/SwitchChains";
import HolonymCheck from '@/components/HolonymCheck';


// async function getData() {
//     const response = await fetch(
//         'https://api.holonym.io/sybil-resistance/gov-id/optimism?action-id=123456789&user=0x30BCD2e90B3C05e54446568d823408B2ddfa7A01',
//         {
//             // Adding cache options
//             cache: 'no-store', // Equivalent to getServerSideProps behavior
//             // Or use revalidate if you want ISR:
//             // next: { revalidate: 60 } // Revalidate every 60 seconds
//         }
//     );

//     console.log('response', response);

//     if (!response.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     const { result: isUnique } = await response.json();
//     return { isUnique };
// }

export default function CreateIdentity() {
    const {
        connected,
        walletClient,
        userAddress,
    } = useWallet();

    return (
        <div className="flex flex-col justify-center align-middle items-center  p-[4rem] md:p-[8rem] lg:p-[10rem] w-screen ">
            <div className=" text-black text-center">
                <div className="flex flex-col ">
                    <div className="mb-5 text-5xl font-serif font-bold">  NebulaHolo Identity Check </div>
                    <div className="mb-5 text-xl">
                        Checking your identity using NebulaID & Holonym
                    </div>

                    <HolonymCheck />

                    {/* {connected && walletClient && userAddress ? (
                        <div>

                            <div className="flex flex-row pt-10 items-center justify-center">
                                <span>User Sybil Resistance Check:</span>
                                <div className="bg-gray-200 mx-2 px-4 py-2 rounded-xl font-semibold">
                                    {isUnique ? 'unique' : 'not unique'}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-row pt-10 items-center justify-center">
                            <span>User Sybil Resistance Check:</span>
                            <div className="bg-gray-200 mx-2 px-4 py-2 rounded-xl font-semibold">
                                Please connect with your Silk Wallet
                            </div>
                        </div>
                    )} */}

                    <div className="pt-10 font-mono">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-xl ">
                                <Link href="/">
                                    <div className="bg-white p-6 rounded-xl ">
                                        <h2 className="text-2xl font-semibold mb-4">Connect Your Onchain Wallet</h2>
                                        <div className='py-2'>
                                            User can connect their onchain wallet or NebulaID wallet to Silk Wallet for better sybil resistance check and onchain score.
                                        </div>
                                        <button
                                            className="button-link bg-black m-2 px-4 py-2 text-white rounded"
                                        >
                                            Verify with Silk Wallet
                                        </button>
                                    </div>
                                </Link>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-xl ">
                                {connected && walletClient && userAddress ? (
                                    <div className='flex flex-col items-center space-y-4 font-mono text-sm lg:flex w-full'>
                                        <div className="p-4 rounded-md border-black border bg-white w-1/2">
                                            <h2 className="text-lg font-semibold mb-2">Silk Address</h2>
                                            <p className="mt-2 text-gray-600 break-all">{userAddress}</p>
                                        </div>
                                        <PersonalSign />
                                        <SwitchChains />
                                    </div>
                                ) : ("Please connect with your Silk Wallet")}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
