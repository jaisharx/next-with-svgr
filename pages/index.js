import Svg from 'components/svg';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next With SVGR</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Svg/>
            </main>
        </>
    );
}
