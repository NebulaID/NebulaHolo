import React from 'react';

async function getData() {
    const response = await fetch(
        'https://api.holonym.io/sybil-resistance/gov-id/optimism?action-id=123456789&user=0x30BCD2e90B3C05e54446568d823408B2ddfa7A01',
        {
            // Adding cache options
            cache: 'no-store', // Equivalent to getServerSideProps behavior
            // Or use revalidate if you want ISR:
            // next: { revalidate: 60 } // Revalidate every 60 seconds
        }
    );

    console.log('response', response);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const { result: isUnique } = await response.json();
    return { isUnique };
}

export default async function CreateIdentity() {
    const { isUnique } = await getData();

    return (
        <div className="flex flex-col justify-center align-middle items-center  p-[4rem] md:p-[8rem] lg:p-[10rem] w-screen ">
            <div className=" text-black text-center">
                <div className="flex flex-col ">
                    <div className="mb-5 text-5xl font-serif font-bold">  NebulaHolo Identity Check </div>
                    <div className="mb-5 text-xl">
                        Checking your identity using NebulaID & Holonym
                    </div>
                    <div className="flex flex-row pt-10 items-center justify-center">
                        <span>User Sybil Resistance Check:</span>
                        <div className="bg-gray-200 mx-2 px-4 py-2 rounded-xl font-semibold">
                            {isUnique ? 'unique' : 'not unique'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
