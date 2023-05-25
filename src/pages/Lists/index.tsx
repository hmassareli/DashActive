import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import favicon from '../../assets/logo.svg';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listaMeses from '../../repositories/meses';
import { v4 as uuidv4 } from 'uuid';

interface IRouteParams extends Params {
  type: string;
}
interface Idata {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
const List: React.FC = () => {
  const [data, setData] = useState<Idata[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  const { type } = useParams<IRouteParams>();

  const titleDashboard = useMemo(() => {
    return type === 'entradas'
      ? {
          title: 'Entradas',
          lineColor: '#4E41F0',
        }
      : {
          title: 'Saídas',
          lineColor: '#E44C4E',
        };
  }, [type]);
  const title = useMemo(() => {
    return type === 'entradas' ? 'Carteira - Entradas' : 'Carteira - Saídas';
  }, [type]);

  // manipulando os dados do repositório
  const listData = useMemo(() => {
    return type === 'entradas' ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const filteredDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      return month === monthSelected && year === yearSelected;
    });
    const formatedDate = filteredDate.map(item => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0',
      };
    });
    setData(formatedDate);
  }, [listData, monthSelected, yearSelected]);

  // opções de data
  const meses = useMemo(() => {
    return listaMeses.map((mes, index) => {
      return {
        value: String(index + 1),
        label: mes,
      };
    });
  }, [listData]);

  const anos = useMemo(() => {
    let uniqueYears: number[] = [];
    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map(year => {
      return { value: String(year), label: String(year) };
    });
  }, []);

  return (
    <div>
      <Helmet>
        <link rel='icon' type='image/x-icon' href={favicon} />
        <title>{title}</title>
      </Helmet>
      <Container>
        <ContentHeader title={titleDashboard.title} lineColor={titleDashboard.lineColor}>
          <SelectInput
            options={listaMeses}
            onChange={e => setMonthSelected(e.target.value)}
            defaultValue={monthSelected}
          />
          <SelectInput
            options={anos}
            onChange={e => setYearSelected(e.target.value)}
            defaultValue={yearSelected}
          />
        </ContentHeader>
        <Filters>
          <button type='button' className='tag-filter tag-filter-recurrent'>
            Recorrentes
          </button>
          <button type='button' className='tag-filter tag-filter-eventual'>
            Eventuais
          </button>
        </Filters>
        <Content>
          {data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))}
        </Content>
      </Container>
    </div>
  );
};
export default List;
