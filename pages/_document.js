import { ColorModeScript } from '@chakra-ui/react';
import Document, {
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en-US'>
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
