import React, { useEffect, useState } from 'react';

import * as Dictionary from './dictionary.ts';
import Filter, { FilterDefault } from './Filter.tsx';
import Lexeme from './Lexeme.tsx';

import DownloadButton from './buttons/DownloadButton.tsx';
import ShareButton from './buttons/ShareButton.tsx';

import { GetLSParam, SetLSParam } from './ls_util.ts';
import { GetURLParam, SetURLParam } from './url_util.ts';

import './App.scss';

const App = () => {
  const [filterCtxt, setFilterCtxt] = useState(FilterDefault);

  const lexemes = Dictionary.en_dk
    .filter((l: Dictionary.Lexeme) => {
      const input_lowered = filterCtxt.input.toLocaleLowerCase();
      return (l.word.toLocaleLowerCase().includes(input_lowered)
        || (l.search_terms && l.search_terms.some((x) => x.toLocaleLowerCase().includes(input_lowered)))
        || (l.phrases && l.phrases.some(([en, _]) => en.includes(input_lowered))))
        && (filterCtxt.category === "" || l.keywords.some((kw: string) => kw === filterCtxt.category))
    });

  const [darkMode/*, setDarkMode*/] = useState(() => {
    // Consult URL for state from shared link
    const url_res = GetURLParam('dark');
    if (url_res) { return url_res === "true"; }

    // Consult local storage for state from previous visit
    const ls_res = GetLSParam('dark');
    if (ls_res) { return ls_res === "true"; }

    // Ask browser, whether it wants to use dark mode
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Otherwise, keep it light
    return false;
  });

  useEffect(() => {
    SetLSParam('dark', `${darkMode}`);
    SetURLParam('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "DarkMode" : ""}`}>
      <Filter onChange={setFilterCtxt} />

      <div className="Words">
        {lexemes.map(l => <Lexeme lexeme={l} key={JSON.stringify(l)} />)}
      </div>

      <div className="Buttons">
        <ShareButton />
        <DownloadButton lexemes={lexemes} />
      </div>
    </div>
  );
}

export default App;
