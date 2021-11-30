import { FC } from 'react';
import cn from 'classnames';
import TextField from '@mui/material/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { htmlDecode } from './utils/htmlDecode';
import classes from './MainInfo.module.scss';
import { MainInfoProps } from './types';

const MainInfo: FC<MainInfoProps> = ({
  mainHeadline,
  fbTitle,
  body,
  fieldClass,
}) => (
  <>
    <TextField
      label="Main Headline"
      variant="outlined"
      value={mainHeadline}
      className={fieldClass}
    />

    <TextField
      label="Fb Title"
      variant="outlined"
      value={fbTitle}
      className={fieldClass}
    />

    <div className={cn(classes['editor-wrap'], fieldClass)}>
      <CKEditor editor={ClassicEditor} data={htmlDecode(body)} />
    </div>
  </>
);

export default MainInfo;
