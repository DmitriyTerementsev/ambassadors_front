import { useEffect, useState } from 'react';
import FilterColorStatusSelect from '../../../FilterColorStatusSelect/FilterColorStatusSelect';
import './PromocodeItem.css';

// type Props = {

// };
export default function PromocodeItem({
  name,
  course,
  telegram,
  promocode,
  created,
  status,
}: any) {
  const [date, setDate] = useState(created);
  const [statusValue, setStatusValue] = useState(status);

  useEffect(() => {
    const dateObj = new Date(created);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, [created]);

  return (
    <li className='promocode__item'>
      <div className='promocode__text promocode-name'>
        <p className='promocode__text'>{name}</p>
        <p className='promocode__text direction'>{course}</p>
      </div>
      <p className='promocode__text telegram'>{telegram}</p>
      <p className='promocode__text promocode-text'>{promocode}</p>
      <p className='promocode__text promocode-registration'>{date}</p>
      <FilterColorStatusSelect value={statusValue} onChange={setStatusValue} />
    </li>
  );
}
