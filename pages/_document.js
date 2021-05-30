import Document, {
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en-US'>
                <Head>
                    <meta charSet='utf-8' />
                    <script type="text/javascript" src='/noflash.js' />
                </Head>
                <body className='loading'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
