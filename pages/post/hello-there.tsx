import Head from 'next/head'
import Image from 'next/image'

const Hello = () => (
    <>
        <Head>
            <title>Oi! Aqui! :: Meu blog</title>
            <meta property="og:title" content="Oi! Aqui! :: Meu blog" />
        </Head>
        <article>
            <h2>Oi! Aqui!</h2>
            <Image src="/post/hello-there/jcemer-road-ahead.jpg"
                width={640} height={427}
            />
            <p>Photo by <a href="https://unsplash.com/@jeancarloemer">Jean Carlo Emer</a> on Unsplash</p>
        </article>
    </>
)

export default Hello