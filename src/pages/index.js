import { getSession } from "next-auth/react";
import Head from "next/head";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import Header from "../components/Header/Header";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/footer/Footer"
export default function Home({ products }) {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
        />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
        <Footer />
      </main>
    </motion.div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch(
    "https://hasinduperera12.github.io/amazonAPi/amazon.json"
  ).then((res) => res.json());

  return {
    props: {
      products: products,
      session: session,
    },
  };
}
