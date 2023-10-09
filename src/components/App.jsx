import { FormPhonebook } from './FormPhonebook/FormPhonebook'
import { FilterForm } from './FilterForm/FilterForm';
import { ContactsList } from './ContactsList/ContactsList'
import React from 'react';





export const App = () => {    
    
    return (
      <div>
        <FormPhonebook/>
        <FilterForm/>
        <ContactsList/>
      </div>
    );
  
};
