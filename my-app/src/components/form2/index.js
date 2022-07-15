import React from 'react';
import {
  Heading,
  Box,
  Center,
  Button,
  Stack,
  Checkbox,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

const Form2 = ({
  handleSubmit2,
  handleChange2,
  handleChangeMood,
  handleChangeWaktu,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit2}>
        <Center py={6}>
          <Box
            maxW={'480px'}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Stack>
              <Heading color={'gray.700'} fontSize={'2xl'} fontFamily={'body'}>
                Checklist yang Anda Suka
              </Heading>
            </Stack>

            {/* Suka Manis */}
            <Stack mt={3} align={'center'}>
              <Stack spacing={5} direction="row">
                <Checkbox
                  type="checkbox"
                  id="coklat"
                  name="coklat"
                  value="coklat"
                  onChange={handleChange2}
                >
                  Coklat
                </Checkbox>
                <Checkbox
                  type="checkbox"
                  id="caramel"
                  name="caramel"
                  value="caramel"
                  onChange={handleChange2}
                >
                  Caramel
                </Checkbox>

                <Checkbox
                  type="checkbox"
                  id="latte"
                  name="latte"
                  value="latte"
                  onChange={handleChange2}
                >
                  Latte
                </Checkbox>

                <Checkbox
                  type="checkbox"
                  id="susu"
                  name="susu"
                  value="susu"
                  onChange={handleChange2}
                >
                  Susu
                </Checkbox>
              </Stack>

              <div>
                <Stack mt={6}>
                  <Heading
                    color={'gray.700'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                  >
                    Bagaimana Mood Anda Hari ini?
                  </Heading>
                </Stack>
                <RadioGroup>
                  <Stack my={4} spacing={20} direction="row" mx={10}>
                    <Radio
                      colorScheme="green"
                      type="radio"
                      name="mood"
                      id="gmood"
                      value="true"
                      onChange={handleChangeMood}
                    >
                      <label class="form-check-label" htmlFor="gmood">
                        Good Mood
                      </label>
                    </Radio>
                    <Radio
                      colorScheme="red"
                      type="radio"
                      name="mood"
                      id="bmood"
                      value="false"
                      onChange={handleChangeMood}
                    >
                      <label class="form-check-label" htmlFor="bmood">
                        Bad Mood
                      </label>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>

              <div>
                <Stack mt={3}>
                  <Heading
                    color={'gray.700'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                  >
                    Kapan Waktu Anda Berkunjung?
                  </Heading>
                </Stack>
                <RadioGroup>
                  <Stack my={4} spacing={20} direction="row" mx={10}>
                    <Radio
                      colorScheme="green"
                      type="radio"
                      name="waktu"
                      id="pagi"
                      value="pagi"
                      onChange={handleChangeWaktu}
                    >
                      <label class="form-check-label" htmlFor="pagi">
                        Pagi
                      </label>
                    </Radio>
                    <Radio
                      colorScheme="red"
                      type="radio"
                      name="waktu"
                      id="sore"
                      value="sore"
                      onChange={handleChangeWaktu}
                    >
                      <label class="form-check-label" htmlFor="sore">
                        Sore
                      </label>
                    </Radio>
                    <Radio
                      name="waktu"
                      id="malam"
                      value="malam"
                      onChange={handleChangeWaktu}
                    >
                      <label class="form-check-label" htmlFor="malam">
                        Malam
                      </label>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>

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
                Submit
              </Button>
            </Stack>
          </Box>
        </Center>
      </form>
    </div>
  );
};

export default Form2;
