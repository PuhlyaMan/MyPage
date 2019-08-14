import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import style from './style.css';

const useStyle = makeStyles({
  textField: {
    padding: '0 15px 0 0',
    boxSizing: 'border-box',
  },
});

export default function CommunicationForm() {
  const classes = useStyle();
  return (
    <form className={style.form}>
      <div className={style.header}>Форма обратной связи</div>
      <div className={style.container}>
        <TextField
          id="target"
          label="Цель обращения"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          fullWidth
        />
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Ваши имя и фамилия"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            label="Ваш Email"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            fullWidth
          />
        </Grid>
        <TextField
          id="target"
          label="Содержание обращения"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          className={classes.textField}
          fullWidth
        />
      </div>
      <Button type="submit" size="large" variant="contained" color="primary">
        Отправить
        <Icon className={style.icon}>send</Icon>
      </Button>
    </form>
  );
}