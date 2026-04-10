import React from 'react';
import './Lexeme.scss';
import * as Dictionary from './dictionary.ts';

interface LexemeProps {
  lexeme: Dictionary.Lexeme,
};

const Lexeme = ({ lexeme }: LexemeProps) => {
  return (
    <div className="Lexeme">
      <div className="Word">{lexeme.word}</div>
      {lexeme.type && <div className="Type">{lexeme.type}</div>}

      {lexeme.note && <div className="Note">({lexeme.note})</div>}

      {lexeme.translations.map((t) => <div className="Translation" key={t}>{t}</div>)}

      {lexeme.phrases && <div className="Phrases">
        {lexeme.phrases.map(([en, dk], idx) =>
          <div key={idx}>
            <div className="English">{en}</div>
            <div className="Danish">&ensp; {dk}</div>
            {idx + 1 !== lexeme.phrases?.length && <> ⚬ </>}
          </div>
        )}
      </div>}
    </div>
  );
};

export default Lexeme;
