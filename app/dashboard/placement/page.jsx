import React from "react";
import Link from "next/link";

const about = () => {
    return (
        <>
        <div className="flex items-center">
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                <div className="text-black text-center m-2">
                    TCS
                    <Link href={"https://www.tcs.com/careers"}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
            <div className="text-black text-center m-2">
                Infosys
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
            <div className="text-black text-center m-2">
                EY
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
            <div className="text-black text-center m-2">
                Zoho
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex items-center">
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
            <div className="text-black text-center m-2">
                google
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    Facebook

                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    Amazon
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    microsoft
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex items-center">
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    netflix
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    Y combinator
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    oracle
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-64 bg-blue-200 rounded-md m-4">
                                <div className="text-black text-center m-2">
                                    Freshworks
                    <Link href={""}>
                    <div className="bg-blue-500 text-white mt-20 text-center rounded-md">View Job</div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default about;