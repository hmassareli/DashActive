import React, { useEffect, useMemo, useState } from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import Lists from '../Lists';
import listaMeses from '../../repositories/meses';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  // opções de data
  const meses = useMemo(() => {
    return listaMeses.map((mes, index) => {
      return {
        value: String(index + 1),
        label: mes,
      };
    });
  }, []);
  const anos = [
    { value: '23', label: '2023' },
    { value: '24', label: '2024' },
    { value: '25', label: '2025' },
    { value: '26', label: '2026' },
    { value: '27', label: '2027' },
    { value: '28', label: '2028' },
    { value: '29', label: '2029' },
    { value: '30', label: '2030' },
    { value: '31', label: '2031' },
    { value: '32', label: '2032' },
    { value: '33', label: '2033' },
    { value: '34', label: '2034' },
    { value: '35', label: '2035' },
    { value: '36', label: '2036' },
    { value: '37', label: '2037' },
    { value: '38', label: '2038' },
    { value: '39', label: '2039' },
    { value: '40', label: '2040' },
    { value: '41', label: '2041' },
    { value: '42', label: '2042' },
    { value: '43', label: '2043' },
    { value: '44', label: '2044' },
    { value: '45', label: '2045' },
    { value: '46', label: '2046' },
    { value: '47', label: '2047' },
    { value: '48', label: '2048' },
    { value: '49', label: '2049' },
    { value: '50', label: '2050' },
  ];

  return (
    <div>
      <Container>
        <ContentHeader title='Dashboard' lineColor='#f7931b'>
          <SelectInput options={listaMeses} onChange={e => setMonthSelected(e.target.value)} />
          <SelectInput options={anos} onChange={e => setYearSelected(e.target.value)} />
        </ContentHeader>
      </Container>
    </div>
  );
};
export default Dashboard;
