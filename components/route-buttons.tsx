"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface Props {
    className?: string;
}

export const RouteButtons = ({className}: Props) => {
	const router = useRouter();
	return (
		<div className={className}>
			<Button
				className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
				onClick={() => router.push("/upload")}
			>
				Create Post
			</Button>

			<Button
				className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
				onClick={() => router.push("/creator")}
			>
				Find Posts
			</Button>
		</div>
	);
};
