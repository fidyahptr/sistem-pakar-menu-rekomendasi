import React, { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import swal from 'sweetalert';
import Form1 from '../components/form1/index';
import Form2 from '../components/form2/index';

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
          <Form1 handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
      )}
      {/* End of Form 1 */}

      {/*Form 2 */}
      {question && (
        <div>
          <Form2
            handleSubmit2={handleSubmit2}
            handleChange2={handleChange2}
            handleChangeMood={handleChangeMood}
            handleChangeWaktu={handleChangeWaktu}
          />
        </div>
      )}
      {/* End of Form 2 */}
    </div>
  );
};

export default Form;
