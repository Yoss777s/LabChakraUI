import { Button, Box, Heading } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box position="relative">
      <Box maxH="400px" overflow="hidden" position="relative">
        <img
          src="https://www-prod.prod.jimdo.systems/es/blog/wp-content/uploads/2019/03/FreeImages.jpeg"
          alt="Imagen grande"
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" width="100%">
          <Heading as="h1" color="white" fontSize="2xl">
            DOMINA EL TERRENO
          </Heading>
        </Box>
        <Box position="absolute" top="80%" left="50%" transform="translate(-50%, -50%)" textAlign="center" width="100%">
          <Button variant="outline" colorScheme="blackAlpha" mr="10px" color="white">
            VER DETALLES
          </Button>
          <Button variant="outline" colorScheme="blackAlpha" color="white">
            VER VIDEO
          </Button>
        </Box>
      </Box>

      <Box maxH="200px" overflow="hidden" mt="20px" position="relative">
        <img
          src="https://www-prod.prod.jimdo.systems/es/blog/wp-content/uploads/2019/03/FreeImages.jpeg"
          alt="Imagen pequeña"
          style={{ width: '28%', objectFit: 'cover' }}
        />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="100%">
          <Heading as="h2" color="white" fontSize="lg">
          DOMINA EL TERRENO
          </Heading>
        </Box>
        <Box position="absolute" top="80%" left="20" transform="translate(-50%, -50%)" textAlign="center" width="100%">
          <Button variant="outline" colorScheme="blackAlpha" mr="10px" color="white">
            DETALLE
          </Button>
          <Button variant="outline" colorScheme="blackAlpha" color="white">
            VIDEO
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
