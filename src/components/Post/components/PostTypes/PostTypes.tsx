import { FC } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { PostTypesProps } from './types';

const Disclaimers: FC<PostTypesProps> = ({
  fieldClass,
  isBreakingNews,
  isAdv,
  isEditorPick,
  isSmartNews,
  isOperaRss,
}) => (
  <FormGroup className={fieldClass}>
    <FormControlLabel
      control={<Switch checked={isBreakingNews} />}
      label="Is Breaking News"
    />
    <FormControlLabel control={<Switch checked={isAdv} />} label="Is Adv" />
    <FormControlLabel
      control={<Switch checked={isEditorPick} />}
      label="Is Editor Pick"
    />
    <FormControlLabel
      control={<Switch checked={isSmartNews} />}
      label="Is Smart News"
    />
    <FormControlLabel
      control={<Switch checked={isOperaRss} />}
      label="Is Opera Rss"
    />
  </FormGroup>
);

export default Disclaimers;
