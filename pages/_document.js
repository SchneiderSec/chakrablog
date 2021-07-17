import { ColorModeScript } from '@chakra-ui/react';
import Document, {
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import theme from '../styles/theme';

class MyDocument extends Document {
    
    render() {
        return (
            <Html lang='en-US'>
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
