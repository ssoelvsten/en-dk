import React from 'react';
import RoundButton from './RoundButton';
import { GetURL } from './url_util';
import ShareSvg from './svg/share.svg'

const Share = () =>
  <RoundButton onClick={() => navigator.clipboard.writeText(GetURL())}
               icon={ShareSvg}
               title='copy url to clipboard'/>

export default Share;
