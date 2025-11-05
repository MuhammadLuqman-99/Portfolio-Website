import Head from 'next/head';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Luqman | Digital Marketer & Full Stack Developer</title>
        <meta name="description" content="Professional portfolio of Muhammad Luqman - Digital Marketer, Full Stack Developer & Blockchain Specialist. Transforming ideas into digital solutions." />
        <meta name="keywords" content="Muhammad Luqman, Digital Marketing, Web Development, Blockchain, Full Stack Developer, Malaysia" />
        <meta name="author" content="Muhammad Luqman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Muhammad Luqman | Digital Marketer & Developer" />
        <meta property="og:description" content="Transforming ideas into digital solutions through marketing and technology" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Muhammad Luqman | Portfolio" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
