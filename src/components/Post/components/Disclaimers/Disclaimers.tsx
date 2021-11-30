import { FC } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Disclaimer } from '../../../../types/post';

import { DisclaimersProps } from './types';

const Disclaimers: FC<DisclaimersProps> = ({ fieldClass, disclaimers }) => (
  <FormGroup className={fieldClass}>
    <FormControlLabel
      control={<Checkbox checked={disclaimers.includes(Disclaimer.Health)} />}
      label="Health disclaimer"
    />
    <FormControlLabel
      control={<Checkbox checked={disclaimers.includes(Disclaimer.Violence)} />}
      label="Violence disclaimer"
    />
    <FormControlLabel
      control={<Checkbox checked={disclaimers.includes(Disclaimer.Covid)} />}
      label="COVID-19 disclaimer"
    />
    <FormControlLabel
      control={<Checkbox checked={disclaimers.includes(Disclaimer.Fiction)} />}
      label="Fiction disclaimer"
    />
  </FormGroup>
);

export default Disclaimers;
