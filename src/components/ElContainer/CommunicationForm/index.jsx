import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  form: {
    border: '3px solid #ced4da',
    borderRadius: '15px',
    margin: '40px 150px',
    padding: '15px',
    backgroundColor: '#b7dff7',
  },

  header: {
    fontSize: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
  },

  textField: {
    boxSizing: 'border-box',
    padding: '0 15px 0 0',
  },

  icon: {
    margin: '0 0 0 5px',
  },

});

export default function CommunicationForm() {
  const classes = useStyle();

  return (
    <form className={classes.form}>
      <div className={classes.header}>Форма обратной связи</div>
      <div className={classes.container}>
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
        <Icon className={classes.icon}>send</Icon>
      </Button>
    </form>
  );
}