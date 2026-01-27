import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

import SoltionHero from "@/components/solutions/SolutionHero";
import SolutionFeature from "@/components/solutions/SolutionFeatures";
import SolutionBestfor from "@/components/solutions/SolutionBestFor";
import SolutionCTA from "@/components/solutions/SolutionCTA";

import { SolutionDetail } from "@/types/solution";
import { solutionDetails } from "@/data/solutionDetail";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function SolutionDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const solution = solutionDetails.find((item) => item.slug === slug);

    if (!solution) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="flex-grow">
                <SoltionHero hero={solution.hero} slug={slug} />
                <SolutionFeature feature={solution.features} />
                
                <SolutionBestfor bestfor={solution.bestFor} />
                <SolutionCTA cta={solution.cta} />
            </main>
            <Background />
            <Footer />
        </>
    );
}
