import Head from "next/head";
import {
  Navbar,
  Hero,
  About,
  Services,
  Testimonies,
  CTA,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fictio</title>
        <meta
          name="Fictio - Página de demostración."
          content="Fictio - Página de demostración."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <About />
        {/* <Services />
        <Testimonies />
        <CTA />
        <Footer /> */}
      </div>
    </div>
  );
}
