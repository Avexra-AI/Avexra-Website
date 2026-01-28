
import {solutions} from "@/data/solutions"
import Link from "next/link";
import Image from "next/image"; // ✅ correct


export default function SolutionSection() {
	return (
		<section
			id="solutions"
			className="relative w-full font-sans text-slate-600 antialiased overflow-x-hidden pt-16 min-h-screen flex flex-col"
		>
			{/* SERVICES */}
			<section className="flex-grow flex flex-col items-center relative z-10">
				<div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 md:py-22">
					{/* HEADER */}
					<section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-20 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Enterprise AI <br />
            <span className="text-primary">That Takes Action</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg">
            Empower your business with 24/7 autonomous systems that
            reason, adapt, and execute. Beyond simple chat—true
            operational intelligence.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-xl shadow">
              Get Started Free →
            </button>
            <button className="border px-6 py-3 rounded-xl">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-purple-100 p-6 rounded-3xl">
            {<Image
              src="/solution/img1.jpg"
              alt="AI Network"
              width={420}
              height={420}
              className="rounded-2xl"
            />}
          </div>
        </div>
      </section>

					{/* SERVICE CARDS */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
						{solutions.map((solution, index) => (
							<Link
								key={index}
								href={`/solutions/${solution.slug}`}
								className="block h-full"
							>
								<div
									className={`solution-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up ${solution.animationDelay} cursor-pointer`}
								>
									{/* ICON */}
									<div className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center">
										<span
											className="material-symbols-outlined"
											style={{
												fontVariationSettings: "'wght' 400",
												fontSize: "28px",
											}}
										>
											{solution.icon}
										</span>
									</div>

									{/* CONTENT */}
									<div className="flex flex-col gap-3 flex-grow">
										<h3 className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors">
											{solution.title}
										</h3>
										<p className="text-slate-500 text-sm leading-relaxed">
											{solution.desc}
										</p>
									</div>

									{/* CTA */}
									<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors">
										<span>{solution.cta}</span>
										<span
											className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
											style={{
												fontVariationSettings: "'wght' 400",
												fontSize: "18px",
											}}
										>
											arrow_forward
										</span>
									</div>
								</div>
							</Link>
						))}{" "}
					</div>
				</div>
			</section>

			{/* CTA STRIP */}
			{/* DATA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex gap-4">
          <Image
            src="/solution/img2.jpg"
            alt="Dashboard"
            width={260}
            height={180}
            className="rounded-xl"
          />
          <Image
            src="/solution/img3.jpeg"
            alt="Network"
            width={260}
            height={180}
            className="rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Connect Your Data,<br /> Unleash the Intelligence
          </h2>

          <p className="text-gray-600 mt-4">
            Avexera integrates natively with your CRM, ERP, and internal
            systems—no migration required.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>✅ Direct API access to Salesforce, HubSpot, SAP</li>
            <li>✅ End-to-end encryption</li>
            <li>✅ Real-time learning & model refinement</li>
          </ul>
        </div>
      </section>
		</section>
	);
}
