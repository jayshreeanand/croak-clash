"use client";

import { useAccount } from "wagmi";
import ConnectWallet from "./wallet/connect-wallet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavHeader = () => {
	const { address } = useAccount();
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		setIsAdmin(address === process.env.NEXT_PUBLIC_ADMIN_ADDRESS);
	}, [address]);

	// Get route from router
	const pathname = usePathname();
	const isCrossfiConnect = pathname.includes("/creator/");

	return (
		<header className="flex items-center h-16 bg-gray-900 text-white px-4 border-b border-gray-800 sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-2xl">🐸</span>
					<span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
						Croak Clash
					</span>
				</Link>
				<ConnectWallet />
			</div>
		</header>
	);
};

export default NavHeader;
