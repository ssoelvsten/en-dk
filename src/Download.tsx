import React from 'react';
import { Lexeme } from './dictionary';
import RoundButton from './RoundButton';
import DownloadSvg from './svg/download.svg'

// -----------------------------------------------------------------------------------------------

const lexeme_key = (l: Lexeme) => {
  const word = l.word.replaceAll(' ', '_');
  const type = l.type ? `_${l.type.slice(0, -1)}` : '';
  const note = l.note && !(l.note.startsWith("GB:") || l.note.startsWith("see") || l.note.startsWith("also"))
    ? `_(${l.note.replaceAll(' ', '_')})` : '';
  return `${word}${type}${note}`;
};

const tsv_header: string = "key\tword\ttype\tnote\ttranslations\tphrases"

const tsv_lexeme = (l: Lexeme) => {
  const key: string = lexeme_key(l);
  const word: string = l.word;
  const type: string = l.type ? l.type : "";
  const note: string = l.note ? l.note : "";
  const tran: string = l.translations.join(';');
  const phra: string = l.phrases ? l.phrases.map(([en, dk]) => `${en};${dk}`).join("<>") : "";

  return `${key}\t${word}\t${type}\t${note}\t${tran}\t${phra}`;
};

const tsv = (lexemes: Lexeme[]) => {
  // Based on: https://stackoverflow.com/a/33542499
  const file_content: string = `${tsv_header}\n${lexemes.map(l => tsv_lexeme(l)).join('\n')}\n`;
  const file_name: string = "en-dk.tsv";
  const file_type: string = "text/tsv";

  const blob: Blob = new Blob([file_content], { type: file_type });

  if ((window.navigator as any).msSaveOrOpenBlob) {
    (window.navigator as any).msSaveBlob(blob, file_name);
  } else {
    // Create a dummy element with this file
    const e = document.createElement("a");
    e.href = window.URL.createObjectURL(blob);
    e.download = file_name;
    document.body.appendChild(e);
    e.click();
    document.body.removeChild(e);
    window.URL.revokeObjectURL(e.href);
  }
}

// -----------------------------------------------------------------------------------------------

interface DownloadProps {
  lexemes: Lexeme[]
};

const Download = ({ lexemes }: DownloadProps) =>
  <RoundButton onClick={() => tsv(lexemes)} icon={DownloadSvg} title='download tsv'/>

export default Download;
