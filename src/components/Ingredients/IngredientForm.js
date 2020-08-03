import React from 'react';
import './IngredientForm.css';

import Card from '../UI/Card';
import { useInput, useForm, useIsMounted } from '../../hooks/useInput';


const IngredientForm = React.memo(props => {
  

  const isMounted = useIsMounted()
  const { formValue, onChange } = useForm({name: '', amount: ''});
  
  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    
    <section className="ingredient-form">
      { isMounted.current && 
        <Card>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label htmlFor="title">Name</label>
              <input value={formValue.name} onChange={onChange} name="name" type="text" id="title" />
            </div>
            <div className="form-control">
              <label htmlFor="amount">Amount</label>
              <input value={formValue.amount} onChange={onChange} name="amount" type="number" id="amount" />
            </div>
            <div className="ingredient-form__actions">
              <button type="submit">Add Ingredient</button>
            </div>
          </form>
        </Card>
      }
    </section>
  );
});

export default IngredientForm;
