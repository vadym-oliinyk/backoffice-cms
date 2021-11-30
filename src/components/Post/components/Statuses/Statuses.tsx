import { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { StatusesProps } from './types';

const Statuses: FC<StatusesProps> = ({
  fieldClass,
  status,
  topStatus,
  advStatus,
}) => (
  <>
    <FormControl fullWidth className={fieldClass}>
      <InputLabel id="post-status-select-label">Status</InputLabel>
      <Select labelId="post-status-select-label" value={status} label="Status">
        <MenuItem value={0}>Draft</MenuItem>
        <MenuItem value={1}>On Moderation</MenuItem>
        <MenuItem value={2}>Published</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth className={fieldClass}>
      <InputLabel id="top-status-select-label">Top Status</InputLabel>
      <Select
        value={topStatus}
        labelId="top-status-select-label"
        label="Top Status"
        className={fieldClass}
      >
        <MenuItem value={0}>Regular</MenuItem>
        <MenuItem value={1}>Popular</MenuItem>
        <MenuItem value={2}>Top</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth className={fieldClass}>
      <InputLabel id="adv-status-select-label">Advertisement Status</InputLabel>
      <Select
        value={advStatus}
        labelId="adv-status-select-label"
        label="Advertisement Status"
        className={fieldClass}
      >
        <MenuItem value={0}>Without advertise</MenuItem>
        <MenuItem value={1}>Regular</MenuItem>
      </Select>
    </FormControl>
  </>
);

export default Statuses;
