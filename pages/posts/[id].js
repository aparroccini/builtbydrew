import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import styles from '../../components/article.module.sass'

export default function Post({ postData }) {
    return (
        <Layout>
        <Head>
          <title>{ siteTitle } | {postData.title}</title>
        </Head>
          <article className={styles.Article}>
          <img src={postData.cover} alt={postData.title}/>
          <div className={styles.ArticleHeader}>
            <div className="inner title">
              <h1>{postData.title}</h1>
              <h4>{postData.tech}</h4>
            </div>
          </div>
          <div class="inner">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div>
              <img src={postData.bottom} alt={postData.title}/>
            </div>
          </div>
        </article>
      </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
    props: {
        postData
    }
    }
}