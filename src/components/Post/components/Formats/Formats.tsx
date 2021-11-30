import { FC } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import { Format } from '../../../../types/post';

import { FormatsProps } from './types';

const Disclaimers: FC<FormatsProps> = ({ fieldClass, format }) => (
  <FormControl component="fieldset" className={fieldClass}>
    <FormLabel component="legend">Formats</FormLabel>

    <RadioGroup aria-label="formats" name="post-formats" value={format}>
      <FormControlLabel
        value={Format.HardNews}
        control={<Radio />}
        label="Hard News"
      />
      <FormControlLabel
        value={Format.Profile}
        control={<Radio />}
        label="Profile"
      />
      <FormControlLabel
        value={Format.Listicles}
        control={<Radio />}
        label="Listicles"
      />
      <FormControlLabel
        value={Format.PhotoEssay}
        control={<Radio />}
        label="Photo Essay"
      />
      <FormControlLabel
        value={Format.Explainer}
        control={<Radio />}
        label="Explainer"
      />
      <FormControlLabel
        value={Format.Timeline}
        control={<Radio />}
        label="Timeline"
      />
    </RadioGroup>
  </FormControl>
);

export default Disclaimers;
