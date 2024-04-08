import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
} from '@chakra-ui/react'

export default function NavItem({ icon, title, active, navSize }) {
    return (
        <Flex
            py={0}
            pb={10}
            mb={5}
            mt={5}
            flexDir="column"
            w="100%" 
            gap="0px"
            h={50}
            justifyContent={'center'}
            alignItems={"center"}
            p="0px 0px"
        >
            <Menu placement="right" class="menu">
                <Link
                    backgroundColor={active && "var(--accent_color_1)"}
                    h={0}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "none" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%" display={'block'}  px={"40px"}
                   
                    
                     >
                        <Flex>
                            <Icon as={icon} fontSize="clamp(1.5rem, 2vw, 1.7rem)" 
                                   />
                            <Text ml={5} fontSize="clamp(1.5rem, 2vw, 1.5rem)" 
                                    display={navSize == "small" ? "none" : "block"} 
                                    
                                    >{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
              
            </Menu>
        </Flex>
    )
}