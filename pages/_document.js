import { FlashlessScript } from 'chakra-ui-flashless';
import Document, {
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import theme from '../styles/theme'

class MyDocument extends Document {
    
    render() {
        return (
            <Html lang='en-US'>
                <Head />
                <body>
                    <FlashlessScript theme={theme} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
