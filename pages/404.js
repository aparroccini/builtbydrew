import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.sass'
import Link from 'next/link'

export default function Custom404({}) {
  return (
      <Layout home>
      <Head>
        <title>{siteTitle} | 404</title>
      </Head>
      
      <section>
        <div className="inner">
        <h1>404 - This Page Doesn't Exist</h1>

        <p>Apologies for the bad link, lets try somewhere else.</p>

      
        </div>
        <div className={styles.backToHome}>
            
            <img
              src="/images/home.svg"
              alt="Homepage Link"
            />
            <Link href="/">
            <a>Home</a>
            </Link>
          </div>
      </section>
      
      
    </Layout>
  )
    
  }