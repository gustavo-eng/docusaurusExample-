import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';  
import { useState } from 'react';

/* 
  -  Neste arquivo eu retiro os dados que estão dentro de docusaurus.config.js 
  
  - 
*/


function HomepageHeader() {  
  const [titulo, setTitulo] = useState('')
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline} </p>
        <p className="hero__subtitle">{siteConfig.tagline} </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ! ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <h1> Page em pages/index.js  </h1>
        {
          Array.from({length: 2}).map((_id, index) => {
            return (
              <HomepageFeatures />

            ) 
          })
        }
        <h1> Features !!  </h1>
      </main>
    </Layout>
  );
}
