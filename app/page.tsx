import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Impact from "@/components/Impact";
import PackageContents from "@/components/PackageContents";
import Safety from "@/components/Safety";
import WhoWeServe from "@/components/WhoWeServe";
import MonthlyFeature from "@/components/MonthlyFeature";
import Team from "@/components/Team";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Mission />
      <Impact />
      <PackageContents />
      <Safety />
      <WhoWeServe />
      <MonthlyFeature />
      <Team />
      <GetInvolved />
      <Footer />
    </main>
  );
}
