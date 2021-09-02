import { MainLayout } from '@/layouts';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <SEO pageTitle="Project Include" metaDescription="Project Include" />
        <Hero />
      </div>
    </MainLayout>
  );
}
