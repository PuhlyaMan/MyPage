import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import style from './style.css';

export default function CommunicationForm() {
  return (
    <Form className={style.form}>
      <div className={style.header}>Форма обратной связи</div>
      <Form.Group>
        <Form.Label className={style.label}>Цель обращения</Form.Label>
        <Form.Control type="text" placeholder="Цель обращения" />
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label className={style.label}>Ваши имя и фамилия</Form.Label>
          <Form.Control type="text" placeholder="Фамилия и имя" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label className={style.label}>Ваш Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label className={style.label}>Содержание обращения</Form.Label>
        <Form.Control as="textarea" rows="7" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
}