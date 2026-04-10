import React, { useEffect, useRef, useState } from 'react';
import * as Dictionary from './dictionary.ts';
import { GetURLParam, SetURLParam } from './url_util.ts'

import './Filter.scss';

export interface FilterContext {
  input: string;
  category: Dictionary.KeyWord | "";
};

export const FilterNone: FilterContext = {
  input: "",
  category: "",
};

export const FilterDefault: FilterContext = {
  input: GetURLParam('search') || '',
  category: GetURLParam('category') || ''
};

interface FilterProps {
  onChange: (ctxt: FilterContext) => void;
};

type FilterCategory = Dictionary.KeyWord | "";

const FilterCategories: FilterCategory[] = ["", ...Dictionary.keywords];

const Filter = ({ onChange }: FilterProps) => {
  // ----------------------------------------------------------------------------------------------
  // State
  const [input, setInput] = useState(FilterDefault.input);
  const [category, setCategory] = useState(FilterDefault.category);

  // ----------------------------------------------------------------------------------------------
  // Send updates (debounced) to listener and URL
  //
  // Based on:
  // https://dev.to/alexefimenko/implementing-debounce-in-react-for-efficient-delayed-search-queries-4m49
  const [latestUnbounced, setLatestUnbounced] = useState<FilterContext>(FilterDefault);

  const debounceDelay = 200;
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }
    debounce.current = setTimeout(() => {
      if (input !== latestUnbounced.input || category !== latestUnbounced.category) {
        setLatestUnbounced({ input, category });
        SetURLParam('search', input);
        SetURLParam('category', category);
        onChange({ input, category })
      }
      debounce.current = null;
    }, debounceDelay);
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [input, category, onChange]);

  // ----------------------------------------------------------------------------------------------
  // Additional Keyboard logic
  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("Filter Component: Attaching key listener");

    // Based on: https://stackoverflow.com/a/71778581/13300643
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === "F3" || (e.ctrlKey && e.key === "f")) {
        if (textInput.current) {
          e.preventDefault();
          textInput.current.focus();
        }
      }
    };

    // Add event listener and return clean-up function
    window.addEventListener('keydown', keyListener);
    return () => { window.removeEventListener('keydown', keyListener); }
  }, []);

  return (
    <div className="Filter">
      <div className="Inputs">
        <input onChange={(e) => setInput(e.target.value)}
          placeholder="filter . . ."
          value={input}
          ref={textInput}
        />

        <select
          onChange={(e) => setCategory(e.target.value as FilterCategory)}
          value={category}
        >
          {FilterCategories.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="Separator" />
    </div>
  );
};

export default Filter;
