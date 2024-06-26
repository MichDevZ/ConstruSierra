import { Fab } from "@mui/material";
import { AboutUs, Footer, Header, Projects, Services, Title } from "./components/ui";
import {  Email, WhatsApp } from "@mui/icons-material";
import { getAllProjects } from "./api/projects";
import type { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  icons: 'logo.png',
  title: 'Reformas Integrales en Palma de Mallorca | Reformas Integrales Sierra',
  description: 'Reformas Integrales en Palma de Mallorca y en toda España, Reformas Integrales Sierra Empresa familiar con las mejores soluciones y la mejor calidad',
  keywords: ['Reformas', "Reformas Integrales Palma de Mallorca", 'Reformas Integrales Sierra', 'Reformas Integrales en Palma de Mallorca',
  'Integrales', 'Sierra', 'Palma de Mallorca', 'España', 'Baños', 'Cocina', 
  'Fontaneria', 'Electricidad', 'Interiorismo', 'Baldur', 'Locales', 'Solado', 'Alicatado', 'Parquet',
  'Impermeabilización', 'Techo',
],
robots: 'index, follow',
}




export default async function  Home() {

  const images = await getAllProjects();

  return (
<>
    <header>
        <Header />
    </header>


    <main >
      <Title />
     <Link href={'https://wa.me/34641447238'} target="_blank">
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'fixed', bottom: 16, right: 16, backgroundColor: '#25D366' }}
      >
        <WhatsApp />
      </Fab>
      </Link>
      
        <Link href={"mailto:sierrafer.construdecor@gmail.com"} target="_blank">
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: 'fixed', bottom: 80, right: 16, backgroundColor: 'blue' }}
        >
        <Email />
      </Fab>
      </Link>

      <section>
      <Services />
      </section>

      <section>
      <AboutUs />
      </section>

      <section>
      <Projects images={images} />
      </section>
      
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  );
}
