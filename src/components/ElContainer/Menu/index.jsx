import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from './MenuItem';
import Another from './MenuItem/Another';
import Projects from './MenuItem/Projects';
import Skils from './MenuItem/Skils';

export default function Menu() {
  const [elem, setElem] = useState(0);

  function showActiveMenu(num) {
    setElem(num);
  }

  return (
    <Grid container direction="column">
      <Grid>
        <MenuItem elem={1} active={elem === 1} showActiveMenu={showActiveMenu} item={Projects}>
          Проекты
        </MenuItem>
      </Grid>
      <Grid>
        <MenuItem elem={2} active={elem === 2} showActiveMenu={showActiveMenu} item={Skils}>
          Навыки
        </MenuItem>
      </Grid>
      <Grid>
        <MenuItem elem={3} active={elem === 3} showActiveMenu={showActiveMenu} item={Another}>
          О себе
        </MenuItem>
      </Grid>
    </Grid>
  );
}