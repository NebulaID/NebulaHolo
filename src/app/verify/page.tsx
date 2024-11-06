"use client";
import React from 'react';
import { useWallet } from "@/components/WalletContext";
import Link from 'next/link';
import PersonalSign from "@/components/PersonalSign";
import SwitchChains from "@/components/SwitchChains";
import HolonymCheck from '@/components/HolonymCheck';


export default function Verify() {
    const {
        connected,
        walletClient,
        userAddress,
    } = useWallet();

    return (
        <div className="flex flex-col justify-center align-middle items-center  p-[4rem] md:p-[8rem] lg:p-[10rem] w-screen ">
            <div className=" text-black text-center">
                <div className="flex flex-col ">
                    <div className="mb-5 text-5xl font-serif font-bold">  NebulaHolo Identity Verification </div>
                    <div className="mb-5 text-xl">
                        Verify your identity using NebulaID & Holonym
                    </div>

                    <HolonymCheck />

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
