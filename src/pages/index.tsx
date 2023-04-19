import Head from 'next/head';
import { Inter } from 'next/font/google';
import FooterComponent from '@/components/FooterComponent';
import RdvMapComponent from '@/components/RdvMapComponent';
import ScheduleComponent from '@/components/ScheduleComponent';
import HeaderComponent from '@/components/HeaderComponent';
import TipsComponent from '@/components/TipsComponent';
import { config } from '@/utils/intialValues';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { siteUrl, brideName, groomName, weddingDay } = config;
  return (
    <>
      <Head>
        <title>
          Mariage de {brideName} & {groomName}
        </title>
        <meta
          name="description"
          content={`Mariage de ${brideName} & ${groomName}`}
        />

        <meta property="og:image" content={`${siteUrl}homeweb.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:title"
          content={`Mariage de ${brideName} & ${groomName}`}
        />
        <meta
          property="og:description"
          content={`Youpi on va célébrer le mariage de ${brideName} & ${groomName} ce ${weddingDay}.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen text-white bg-primary">
        <div className="container mx-auto">
          <HeaderComponent />

          {/* rdv mariage */}
          <RdvMapComponent />
          <section className="bg-center bg-no-repeat bg-cover bg-guest">
            {/* <GuestsListComponent /> */}

            {/* emploi du temps */}
            <ScheduleComponent />

            {/* astuces et recommandations */}
            <TipsComponent />
          </section>
          {/* footer  */}
          <FooterComponent />
        </div>
      </main>
    </>
  );
}
