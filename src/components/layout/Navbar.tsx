"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import { usePathname } from "next/navigation";


export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [solutionsOpen, setSolutionsOpen] = useState(false);
	const closeTimer = useRef<NodeJS.Timeout | null>(null);
	const pathname = usePathname();

	const isSolutionsActive = pathname.startsWith("/solutions");

	const links = [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "Blogs", href: "/blogs" },
		{ label: "About Us", href: "/about" },
	];

	const openSolutions = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setSolutionsOpen(true);
	};

	const closeSolutions = () => {
		closeTimer.current = setTimeout(() => {
			setSolutionsOpen(false);
		}, 180);
	};

	return (
		<div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 overflow-visible">
			<nav className="glass-panel relative z-50 flex items-center justify-between rounded-full px-2 py-2 pl-6 w-full max-w-6xl shadow-xl shadow-indigo-100/50 overflow-visible">
				{/* LOGO */}
				<Link href="/" className="flex items-center gap-3">
					<Image
						src="/icons/logo.jpg"
						alt="Avexra AI Logo"
						width={36}
						height={36}
						priority
					/>
					<span className="text-text-main text-lg font-bold tracking-tight">
						Avexra <span className="text-primary">AI</span>
					</span>
				</Link>
  return (
    <button className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 overflow-visible">
      <nav className="glass-panel  flex items-center justify-between rounded-full px-6 py-2 w-full max-w-6xl shadow-xl shadow-indigo-100/50 overflow-visible">

        
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icons/logo.jpg"
            alt="Avexra AI Logo"
            width={36}
            height={36}
            priority
          />
          <span className="text-text-main text-lg font-bold tracking-tight">
            Avexra <span className="text-primary">AI</span>
          </span>
        </Link>

				{/* LINKS */}
				<div className="hidden md:flex items-center gap-1 bg-surface-dim/70 rounded-full p-1 border border-slate-200 backdrop-blur-md overflow-visible">
					{links.map(({ label, href }) => {
						const isActive = pathname === href;
						return (
							<Link
								key={label}
								href={href}
								className={`px-5 py-2 text-sm font-medium rounded-full transition-all shadow-sm relative group ${
									isActive
										? "text-black bg-white shadow"
										: "text-slate-800 hover:text-black hover:bg-white hover:shadow"
								}`}
							>
								{label}
								<span
									className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all ${
										isActive ? "w-4" : "w-0 group-hover:w-4"
									}`}
								/>
							</Link>
						);
					})}
        {/* LINKS */}
        <div className="hidden md:flex items-center gap-1 bg-surface-dim/80 rounded-full p-1 border border-slate-200 backdrop-blur-md overflow-visible">

         

          {links.map(({ label, href }) => {
            const isActive = pathname === href;
          return(
            <Link
              key={label}
              href={href}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all shadow-sm relative group 
                ${
                  isActive
                   ? "text-slate-900 bg-white shadow"
                   : "text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow"
              } 
              `}
            >
              {label}
              <span className={`absolute bottom-1 left-1/2-translate-x-1/2 w-0 h-0.5  bg-primary rounded-full transition-all
                ${isActive ? "w-0" : "w-0 group-hover:w-4"}
                `}/>
            </Link>
          );
})}

					{/* SOLUTIONS */}
					<div
						onMouseEnter={openSolutions}
						onMouseLeave={closeSolutions}
						className=""
					>
						<span
							className={`relative inline-flex items-center px-5 py-2 text-sm font-medium transition-all rounded-full cursor-pointer shadow-sm ${
								isSolutionsActive
									? "text-black bg-white shadow"
									: "text-slate-800 hover:text-black hover:bg-white hover:shadow"
							}`}
						>
							Solutions
							<span
								className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all ${
									isSolutionsActive ? "w-4" : "w-0 group-hover:w-4"
								}`}
							/>
						</span>
          {/* ✅ SOLUTIONS (FIXED) */}
          <div
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
            
          >
            

            
            <span
              className={`px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-all
                rounded-full hover:bg-white cursor-pointer
                shadow-sm hover:shadow
                ${
                  isSolutionsActive
                  ? " text-slate-900 hover:bg-white shadow"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow"
                }`}
            >
              Solutions

            </span>

						{solutionsOpen && (
							<div
								onMouseEnter={openSolutions}
								onMouseLeave={closeSolutions}
								className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
							>
								<SolutionsMegaMenu />
							</div>
						)}
					</div>
				</div>



            {/* 🔽 Mega Menu INSIDE same hover zone */}
            {solutionsOpen && (
              <div
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutions}
                className="absolute left-1/2 translate-x-1/2 top-full pt-4"
              >
                <SolutionsMegaMenu />
              </div>
            )}
          </div>
        </div>

				{/* CTA */}
				<div className="flex items-center gap-4 pr-1">
					{/* <Link
						href="#"
						className="hidden lg:block text-sm font-medium text-slate-600 hover:text-primary transition-colors"
					>
						Sign In
					</Link> */}
					<Link
						href="/contact"
						className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-text-main text-white text-sm font-bold hover:bg-primary transition-all duration-300 shadow-lg shadow-slate-300/50 hover:shadow-indigo-500/30"
					>
						Contact Us
					</Link>
        {/* CTA + MOBILE BUTTON*/}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:flex h-10 px-6 items-center rounded-full bg-text-main text-white text-sm font-bold hover:bg-primary transition"
          >
            Contact Us
          </Link>

					{/* Mobile Menu */}
					<button
						className="sm:hidden p-2 text-slate-700 hover:text-primary"
						onClick={() => setOpen(!open)}
					>
						<span className="material-symbols-outlined">menu</span>
					</button>
				</div>
			</nav>
		</div>
	);
}

          <button
            className="sm:hidden p-2"
            onClick={() => setOpen(true)}
          >
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
      </nav>
  

           {/* Mobile Menu Drawer */ }
    <div 
      className={`fixed inset-0 z-40 md:hidden transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={()=>setOpen(false)}
        />
        <div
        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6  transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button onClick={() => setOpen(false)} className="mb-6">
            <span className="material-symbols-outlined">close</span>
          </button>
          <nav className="flex flex-col gap-4 mt-10">
            {links.map(({ label, href }) => {
              const isActive = pathname === href;
              return(
                <Link
                  key={label}
                  href={href}
                  onClick={()=>setOpen(false)}
                  className={`text-base font-medium px-3 py-2 rounded-md trasition
                    ${
                      isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100'
                       }`}
                       >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={()=>setOpen(false)}
              className="mt-4 block text-center bg-text-main text-white rounded-full px-4 py-2 font-bold hover:bg-primary transition-all duration-300 shadow-lg shadow-slate-300/50 hover:shadow-indigo-500/30">
              contact us 
              </Link>
          </nav>
       </div>
    </div>
    </button>
  )

  {open && (
    <div className="md:hidden absolute top-full mt-4 w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border bottom-slate-200 overflow-hidden">
    <div className="flex flex-col p-4 gap-2">
      {links.map(({label,href})=>(
        <Link
          key={label}
          href={href}
          onClick={()=>setOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100">
            {label}
          </Link>
      ))}
        <button onClick={()=>setSolutionsOpen(!solutionsOpen)} className="flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100">Solutions
          <span 
            className="material-symbols-outlined text-base">
              {solutionsOpen ? "expand_less" : "expand_more"}
            </span>
           </button>
           {solutionsOpen && (
              <div className="pl-4 pt-2"><SolutionsMegaMenu />
              </div>
           )}
           <Link
            href="/contact"
            onClick={()=> setOpen(false)} className="mt-2 flex items-center justify-center h-11 rounded-full bg-text-main text-white tex-sm font-bold hover:bg-primary-transition">Conatct Us</Link>
        
    </div>
    </div>
  
        
        )
      }
    }
