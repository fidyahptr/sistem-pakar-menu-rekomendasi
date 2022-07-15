import React from 'react';
import {
  Heading,
  Box,
  Center,
  Button,
  Image,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

const Form1 = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={'white'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'280px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image
              src={'https://images5.alphacoders.com/905/905439.jpg'}
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
              Apakah Anda Suka Kopi?
            </Heading>
          </Stack>
          <Stack mt={6} align={'center'}>
            {/* form */}
            <form onSubmit={handleSubmit}>
              <RadioGroup>
                <Stack spacing={15} direction="row" mx={20}>
                  <Radio
                    colorScheme="green"
                    type="radio"
                    name="kopi"
                    value="true"
                    onChange={handleChange}
                  >
                    Ya
                  </Radio>
                  <Radio
                    colorScheme="red"
                    type="radio"
                    name="kopi"
                    value="false"
                    onChange={handleChange}
                  >
                    Tidak
                  </Radio>
                </Stack>
              </RadioGroup>

              <Button
                mt={8}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
                type="submit"
              >
                Next
              </Button>
            </form>
            {/* end of form */}
          </Stack>
        </Box>
      </Center>
    </div>
  );
};

export default Form1;
