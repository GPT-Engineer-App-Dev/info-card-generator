import { Box, Image, Text, VStack, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} boxShadow="lg">
        <Image src="/images/dice-on-chessboard.jpg" alt="Dice on Chessboard" />
        <VStack spacing={4} align="stretch">
          <Text fontSize="xl" fontWeight="bold">Dice Games</Text>
          <Text fontSize="md">Dice games are popular in various board games and are often used to teach probability and statistics. They offer a blend of luck and strategy, making them engaging and educational.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;