import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currency = () => {
  const {dispatch } = useContext(AppContext);

    const changecurrency = (val)=>{
            dispatch({
                type: 'CHG_currency',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> currency {
      <select name="currency" id="currency" onChange={event=>changecurrency(event.target.value)}>
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>	
      }	
    </div>
    );
};

export default currency;