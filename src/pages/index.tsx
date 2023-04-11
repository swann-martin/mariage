import Head from "next/head";
import { Inter } from "next/font/google";
import FooterComponent from "@/components/FooterComponent";
import RdvMapComponent from "@/components/RdvMapComponent";
import ScheduleComponent from "@/components/ScheduleComponent";
import HeaderComponent from "@/components/HeaderComponent";
import GuestsListComponent from "@/components/GuestsListComponent";
import TipsComponent from "@/components/TipsComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vous êtes convié.e au mariage de Mélanie et Swann</title>
        <meta name="description" content="Mariage de Mélanie et Swann" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen text-white bg-black">
        <div className="container mx-auto">
          <HeaderComponent />

          {/* rdv mariage */}
          <RdvMapComponent />

          <GuestsListComponent />

          {/* emploi du temps */}
          <ScheduleComponent />

          {/* astuces et recommandations */}
          <TipsComponent />

          {/* footer  */}
          <FooterComponent />
        </div>
      </main>
    </>
  );
}
