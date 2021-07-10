import { Box, useColorModeValue } from "@chakra-ui/react";
import DeskNavbar from "../Navbar/DeskNavbar";
import Footer from "../Navbar/Footer";
import MobileNav from "../Navbar/MobileNav";
import { Triangle, Square, Circle } from "../Shapes/Shapes";

const MainLayout = ({ children }) => {
    return (
        <>
            <Triangle w="120px" />
            <Square w="120px" h="120px"/>
            <Circle width="120px" height="120px"/>
            <Box
            maxW="100%"
            bg={useColorModeValue('rgba(255,255,255,0.8)', 'rgba(26, 33, 42, 0.8)')}
            >
            
            <DeskNavbar  />
            <MobileNav />
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default MainLayout;