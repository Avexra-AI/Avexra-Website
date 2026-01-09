import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceCapabilities from "@/components/services/ServiceCapabilities";
import ServiceUseCases from "@/components/services/ServiceUseCases";
import ServiceCTA from "@/components/services/ServiceCTA";

import { serviceDetails } from "@/data/serviceDetails";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
	const { slug } = await params;

	const service = serviceDetails.find((item) => item.slug === slug);

	if (!service) {
		notFound();
	}

	return (
		<>
			<Navbar />
			<main className="flex-grow">
				<ServiceHero hero={service.hero} slug={slug} />
				<ServiceCapabilities capabilities={service.capabilities} />
				<ServiceUseCases useCases={service.useCases} />
				<ServiceCTA cta={service.cta} />
			</main>
			<Background />
			<Footer />
		</>
	);
}
