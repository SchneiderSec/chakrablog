import { Box, useColorModeValue, chakra } from "@chakra-ui/react"
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionSvg = motion(chakra.svg)

const ShapeContainer = ({children}) => {
    return (
        <chakra.div
        overflow="hidden"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-500}
    >
        {children}
        </chakra.div>
    )
}

const Circle = ({ ...rest }) => {
    
    return (
        <ShapeContainer>
            <MotionBox
            position="absolute"
            top="5%"
            left="90%"
            background="inherit"
            borderColor = "blue.400"
            borderStyle="solid"
            borderWidth="5px"
            rounded="full"
            filter="blur(8px) saturate(160%)"
            {...rest}
            animate={[{ 
                filter: "blur(3px) saturate(100%)",
                transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }},{
                    x: [40, -40],
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }    
                },{
                    y: [50, -50],
                    transition: {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }
                }
            ]}
        >
        </MotionBox>
    </ShapeContainer>
    )
}
const Square = ({ ...rest }) => {
    const container = {
        show: {
            transition: {

            }
        }
    }
    
    return (
        <ShapeContainer>
            <MotionBox
            position="absolute"
            overflow="hidden"
            top="90%"
            left="60%"
            background="inherit"
            borderColor = {useColorModeValue("blue.800","orange.200")}
            borderStyle="solid"
            borderWidth="5px"
            rounded="6px"
            filter="blur(8px) saturate(160%)"
            zIndex="0"
            initial={{ opacity: 0.5 }}
            {...rest}
            animate={[{
                opacity: 1,
                x: 40,
                rotate: 50,
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            },{
                opacity: 1,
                scale: 1.10,
                transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            },{
                opacity: 1,
                y: [50, -50],
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            }
                ]
                }
            transition={{
                repeat: Infinity,
                repeatType: 'reverse'
            }}
                  >
                  </MotionBox>
        </ShapeContainer>
    )
}

const Triangle = ({...rest }) => {
    
    return (
        <ShapeContainer>
            <MotionSvg
                position="absolute"
                overflow="visible"
                fill="none"
                stroke={useColorModeValue("gray.700", "teal.200")}
                display="block"
                filter="blur(6px) saturate(160%)"
                viewBox="0 0 30 30"
                left="10%"
                top="5%"
                zIndex="0"
                {...rest}
                animate={[{
                    x: [-100, 20],
                    rotate: 50,
                    transition: {
                        duration: 13,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }
                },{
                    y: [-100, 0],
                    transition: {
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }
                }
            ]}
            >
                <polygon
                    strokeWidth='1px'
                    strokeLinejoin='round'
                    strokeMiterlimit='10'
                    points='14.921,2.27 28.667,25.5 1.175,25.5 '
                />
            </MotionSvg>
        </ShapeContainer>
    )
}

export {
    Circle,
    Square,
    Triangle
}