import React, { useState } from 'react';
import {
  Heading,
  Box,
  Center,
  Button,
  Image,
  Stack,
  Checkbox,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import swal from 'sweetalert';

const Form = () => {
  const [sukaKopi, setSukaKopi] = useState();
  const [question, setQuestion] = useState(false);
  const [dataSukaManis, setDataSukaManis] = useState(0);
  const [sukaManis, setSukaManis] = useState(0);
  const [mood, setMood] = useState();
  const [waktu, setWaktu] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (!sukaKopi) {
      swal('Menu Rekomendasi', 'Menu Non-Kopi!');
    } else {
      setQuestion(true);
    }
  };

  const handleChange = e => {
    let isChecked = e.target.value;
    isChecked = isChecked === 'true' ? true : false;
    setSukaKopi(isChecked);
  };

  const handleChange2 = e => {
    let isChecked = e.target.checked;
    let i = dataSukaManis;
    isChecked = isChecked ? i++ : --i;
    setDataSukaManis(i);
  };

  const handleChangeMood = e => {
    let isChecked = e.target.value;
    isChecked = isChecked === 'true' ? true : false;
    setMood(isChecked);
  };

  const handleChangeWaktu = e => {
    let value = e.target.value;
    setWaktu(value);
  };

  const handleSubmit2 = async event => {
    event.preventDefault();

    // set value suka manis
    // rule set 2
    if (dataSukaManis >= 3) {
      setSukaManis('ya');
    } else if (dataSukaManis > 0) {
      setSukaManis('sedang');
    } else {
      setSukaManis('tidak');
    }

    // rule set 1
    if (sukaManis === 'ya') {
      if (mood) {
        swal('Menu Rekomendasi', 'Kopi Susu!');
      } else {
        if (waktu === 'pagi') swal('Menu Rekomendasi', 'Vanilla Latte!');
        else if (waktu === 'sore') swal('Menu Rekomendasi', 'Caramel Latte!');
        else if (waktu === 'malam')
          swal('Menu Rekomendasi', 'Caramel Macchiato!');
      }
    } else if (sukaManis === 'sedang') {
      if (mood) {
        if (waktu === 'pagi') swal('Menu Rekomendasi', 'Kopi Soklat!');
      } else if (!mood) {
        if (waktu === 'pagi') swal('Menu Rekomendasi', 'Americano!');
      }
      if (waktu === 'sore') swal('Menu Rekomendasi', 'Vanilla Latte!');
      else if (waktu === 'malam') swal('Menu Rekomendasi', 'Kopi Susu!');
    } else if (sukaManis === 'tidak') {
      swal('Menu Rekomendasi', 'Americano!');
    }
  };

  return (
    <div className="content">
      <Heading as="h2" size="xl" mt={6} pb={4}>
        Rekomendasi Menu Janji Jiwa
      </Heading>

      {/* Form 1 */}
      {!question && (
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
                <Heading
                  color={'gray.700'}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                >
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
      )}
      {/* End of Form 1 */}

      {/*Form 2 */}
      {question && (
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
                  <Heading
                    color={'gray.700'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                  >
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
      )}
      {/* End of Form 2 */}
    </div>
  );
};

export default Form;
