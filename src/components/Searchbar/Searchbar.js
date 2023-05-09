import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Header, Form, Input, Label, Button } from './Searchbar.styled';
import { useState } from 'react';

export function Searchbar({ onReset, handleSearchSubmit }) {
  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();
    if (input === '') {
      toast.error(`These are no images`);
    }
    handleSearchSubmit(input);
    onReset();
  };

  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          🔍
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={onChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  handleSearchSubmit: PropTypes.func,
};
