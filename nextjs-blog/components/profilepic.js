import Image from 'next/image'
import { Box } from '@chakra-ui/layout';

const YourComponent = () => (
  <Box borderRadius="2xl">
   <Image 
   
      src="/images/lighty.jpeg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
      
    /></Box>
  )

  export default YourComponent;