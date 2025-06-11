import Head from 'next/head';

export default function Meta({
  title = 'Rouleur Co.',
  description =
    'Rouleur Co. helps vehicle hire businesses grow with outsourced sales.',
  canonical,
  image,
}) {
  const pageTitle = title ? `${title} | Rouleur Co.` : 'Rouleur Co.';
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
}
