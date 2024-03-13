import { Box, Container, Heading, Stack, Text, Button, Image, Flex, Spacer, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { FaHamburger, FaPlus, FaSun, FaMoon, FaBars } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={bg} color={color} boxShadow="md" p={4}>
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Chud Burger
          </Heading>
          <Spacer />
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<FaBars />} variant="outline" />
            <MenuList>
              <MenuItem icon={<FaHamburger />}>Menu</MenuItem>
              <MenuItem icon={<FaPlus />}>Add a Burger</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Stack spacing={8} p={4}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Our Classic Burger</Heading>
          <Text mt={4}>The classic burger with cheese and our secret sauce!</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Veggie Delight</Heading>
          <Text mt={4}>A delightful burger for our vegetarian friends, packed with fresh veggies!</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">The Mighty Chud</Heading>
          <Text mt={4}>Our signature burger, double patties, cheese, bacon, and Chud sauce!</Text>
        </Box>
      </Stack>

      <Flex justify="center" p={8}>
        <Button rightIcon={<FaPlus />} colorScheme="teal" variant="solid">
          Add New Burger
        </Button>
      </Flex>

      <Box p={6} textAlign="center">
        <Text fontSize="sm">© 2023 Chud Burger. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
