import React from 'react';
import RoundButton from './RoundButton';
import PrintSvg from '../svg/print.svg';

const PrintButton = () =>
    // eslint-disable-next-line no-restricted-globals
    <RoundButton onClick={print} icon={PrintSvg} title='print' />

export default PrintButton;
