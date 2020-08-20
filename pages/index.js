import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Styles from '../components/work.module.sass'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import About from '../components/about'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About></About>
      <section className={Styles.WorkListing}>
        <div className="inner">
        <h2>Portfolio of Work</h2>
          <ul className={Styles.List}>
            {allPostsData.map(({ date, id, title, thumbnail, summary, tech }) => (
              <li key={id}>
              <img src={thumbnail} alt={title}/>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <headline>
                    <h3><a>{title}</a></h3>
                  </headline>
                  </Link>
                  <summary>
                    <p>{summary}</p>

                  </summary>
                  <div role="details">
                    <small>{tech}</small>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}