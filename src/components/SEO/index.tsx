import React from 'react';
import Head from 'next/head';

type Props = {
  pageTitle: string;
  metaDescription?: string;
};

const SEO: React.FC<Props> = ({ pageTitle, metaDescription }): JSX.Element => (
  <Head>
    <title>{pageTitle}</title>
    <meta charSet="utf-8" />
    <meta content="muzzomo" property="og:site_name" />
    <meta content="website" property="og:type" />
    <meta content={pageTitle} name="og:title" property="og:title" />
    <meta content={metaDescription} name="description" />
    <meta content={metaDescription} name="og:description" />
  </Head>
);

export default SEO;
