import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/blogs';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'

export default function Blog({ blogData }) {
    return (
        <Layout>
            <Head>
                <title>{blogData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{blogData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={blogData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const blogData = await getPostData(params.id);
  return {
    props: {
        blogData
    }
  };
}