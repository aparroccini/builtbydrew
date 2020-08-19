import Head from 'next/head'
import styles from './layout.module.sass'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

const name = 'BUILTBYDREW'
const author = 'Drew Parroccini'
const description = 'Digital Portfolio and promotional site for Drew Parroccini, an award winning software engineer living in Portland, OR'
export const siteTitle = 'Built By Drew | Bespoke Web Development'

export default function Layout({ children, home }) {
    return (
      <div className={styles.container}>
      
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6e9894" />
          <meta name="msapplication-TileColor" content="#f1f1f1" />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={name} />
          <meta name="twitter:creator" content={author} />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:description" content="Digital Portfolio and promotional site for Drew Parroccini, an award winning software engineer living in Portland, OR" />
          <meta name="twitter:image" content="https://builtbydrew.vercel.app/images/drew.jpg" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-24965048-13"></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-24965048-13"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-24965048-13');
                `,
            }}
          />

        </Head>
        <header className={styles.header}>
          <Header />
        </header>
        <main>{children}
        
        </main>
        
        {!home && (
          
          <div className={styles.backToHome}>
            
            <img
              src="/images/home.svg"
              alt="Homepage Link"
            />
            <Link href="/">
            <a>Home</a>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    )
  }