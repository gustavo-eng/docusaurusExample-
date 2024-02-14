import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'My website',
    secondParagraph: (
      <>
        Docusaurus was designed from the ground up to be Early 
      </>
    ),
    Svg: require('@site/static/img/undraw_undraw_undraw_undraw_undraw_users_per_minute_1e4q_t22j_-1-_0ngf_-1-_27dv_30ul.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    secondParagraph: (
      <>
        Docusaurus was designed from the ground up to be Early 
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description, secondParagraph}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center"> 
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p> ok {description}</p>
        <p> ok {secondParagraph}</p>
        Any card em Feature 
      </div>
      
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      
      <div className="container">
        Component HomepageFeatures()  em src/components/HomepageFeatures/index.js 
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} 
          
          <Translate> Welcome to my website </Translate>
          <Translate> ++  Este é meu texto  ++ </Translate>
          This is my text 
        </div>
      </div>
    </section>
  );
}
/*
ANTESS 
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to my website</h1>
      <main>
        You can also visit my
        <Link to="https://docusaurus.io/blog">blog</Link>
        <img
          src="/img/home.png"
          alt="Home icon"
        />
      </main>
    </Layout>
  );
}

DEPOISS 
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout>
      <h1>
        <Translate>Welcome to my website</Translate>
      </h1>
      <main>
        <Translate
          id="homepage.visitMyBlog"
          description="The homepage message to ask the user to visit my blog"
          values={{
            blogLink: (
              <Link to="https://docusaurus.io/blog">
                <Translate
                  id="homepage.visitMyBlog.linkLabel"
                  description="The label for the link to my blog">
                  blog
                </Translate>
              </Link>
            ),
          }}>
          {'You can also visit my {blogLink}'}
        </Translate>

        <img
          src="/img/home.png"
          alt={
            translate({
              message: 'Home icon',
              description: 'The homepage icon alt message',
            })
          }
        />
      </main>
    </Layout>
  );
}


*/