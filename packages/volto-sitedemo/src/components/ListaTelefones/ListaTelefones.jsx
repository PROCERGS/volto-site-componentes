// src/components/widgets/TelephoneNumberListWidget.jsx

import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const ListaTelefones = (props) => {
  const { value = [], onChange } = props;
  const [numbers, setNumbers] = useState(value);

  const handleAdd = () => {
    setNumbers([...numbers, '']);
  };

  const handleDelete = (index) => {
    const newNumbers = numbers.filter((_, i) => i !== index);
    setNumbers(newNumbers);
    onChange(props.id, newNumbers);
  };

  const handleChange = (index, event) => {
    const newNumbers = numbers.map((num, i) =>
      i === index ? event.target.value : num,
    );
    setNumbers(newNumbers);
    onChange(props.id, newNumbers);
  };

  return (
    <div>
      {numbers?.map((number, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <Input
            type="text"
            value={number}
            onChange={(event) => handleChange(index, event)}
            placeholder="Enter telephone number"
            style={{ marginRight: '10px' }}
          />
          <Button icon="trash" onClick={() => handleDelete(index)} />
        </div>
      ))}
      <Button onClick={handleAdd} type="button">
        Adicionar telefone
      </Button>
    </div>
  );
};

export default ListaTelefones;
