import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
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
            <DeskNavbar  />
            <MobileNav />
            <Box
            maxW="100%"
           >
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default MainLayout;