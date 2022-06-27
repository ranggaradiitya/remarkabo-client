import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, TextArea } from '../components/ui/Forms';
import Button from './ui/Button';
import Message from '../components/ui/Message';

const InfoWrapper = (props) => {
  const { status } = props;

  if (status !== null) {
    if (status === false) {
      return <Message type="error" text="Title is required" />;
    }
    return <Message type="success" text="Note added successfully" />;
  }
  return <></>;
};

const AddNoteForm = () => {
  const [state, setState] = useState({ title: '', note: '' });
  const [isSuccess, setIsSuccess] = useState(null);

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    };

    async function fetchData() {
      const response = await fetch('http://localhost:3001/note', option);
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    }

    fetchData();
    e.preventDefault();
  };

  const { title, note } = state;

  return (
    <>
      <InfoWrapper status={isSuccess} />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Note</Label>
          <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Add</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddNoteForm;