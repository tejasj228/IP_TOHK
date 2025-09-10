"use client";
import Link from "next/link";
import logoWhite from "@/assets/logo-white.png";

export default function Header() {
	const links = [
		{ to: "/", label: "Home" },
		{ to: "#about", label: "About YCB" },
		{ to: "#network", label: "Our Network" },
		{ to: "#editions", label: "Previous Editions" },
		{ to: "#featured", label: "Featured" }
	] as const;

	return (
		<div className="relative ycb-header" style={{ backgroundColor: 'transparent' }}>
			<div className="relative z-10 flex flex-row items-center justify-between px-4 py-1 ycb-header-content" style={{ backgroundColor: 'transparent' }}>
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/">
						<img
							src={logoWhite.src}
							alt="YCB Logo"
							className="h-24 w-24 object-contain"
						/>
					</Link>
				</div>

				{/* Navigation */}
				<nav className="flex gap-8 text-lg">
					{links.map(({ to, label }) => {
						const isActive = to === "/";
						return (
							<Link
								key={to}
								href={to}
								className={`font-bold text-[15px] leading-[24.32px] transition-colors ${
									isActive
										? 'text-[#1a365d] dark:text-[#f6f6f6]'
										: 'text-[#4a5568] dark:text-[#cecece] hover:text-[#1a365d] dark:hover:text-[#f6f6f6]'
								}`}
							>
								{label}
							</Link>
						);
					})}
				</nav>
			</div>

			{/* <div className="relative z-10 h-px bg-[#e2e8f0] dark:bg-[#d9d9d9] mx-4" /> */}
		</div>
	);
}
