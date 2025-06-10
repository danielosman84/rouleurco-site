import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Index() {
  return (
    <>
      <Head>
        <title>Rouleur Co. | Sales-as-a-Service</title>
        <meta
          name="description"
          content="Rouleur Co. helps vehicle hire businesses grow with expert sales outsourcing and CRM automation."
        />
      </Head>
      <HomePage />
    </>
  );
}
