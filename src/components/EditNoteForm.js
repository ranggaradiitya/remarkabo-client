import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, TextArea } from './ui/Forms';
import Button from './ui/Button';
import Message from './ui/Message';

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

const EditNoteForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const noteId = location.pathname.replace('/edit/', '');
    async function fetchData() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/note/${noteId}`);
      const data = await response.json();
      setCurrentNote(data);
    }
    fetchData();
  }, []);

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const option = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentNote)
    };
    async function submitData() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/note/${currentNote._id}`, option);
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    }
    submitData();
    e.preventDefault();
  };

  const handleDeleteNote = () => {
    const option = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    async function deleteData() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/note/${currentNote._id}`, option);
      if (response.ok) {
        navigate('/');
      }
    }
    deleteData();
  };

  const { title, note } = currentNote;

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
          <Button type="submit">Save</Button>
          <Button danger onClick={handleDeleteNote}>Delete</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default EditNoteForm;