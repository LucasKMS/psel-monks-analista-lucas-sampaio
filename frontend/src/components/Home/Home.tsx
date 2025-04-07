"use client";
import HeroBanner from "../HeroBanner";
import useCards from "@/hooks/UseCards";
import CardCarousel from "../CardCarousel";
import FeatureCards from "../FeatureCards";
import DownloadAppBanner from "../DownloadAppBanner";
import TagsSection from "../TagsSection";
import InfoCards from "../InfoCards";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

export default function Home() {
  const { cards, loading, error } = useCards();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <HeroBanner />
      <CardCarousel cards={cards} />
      <FeatureCards />
      <DownloadAppBanner />
      <TagsSection />
      <InfoCards />
      <ContactForm />
      <Footer />
    </div>
  );
}
