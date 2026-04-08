export type Params = 'dark';

/// Returns the parameter value for a given key. If none exists, then it returns `null`.
export function GetLSParam<V = string> (key: Params) {
  return localStorage.getItem(key) as V | null;
}

/// Sets the parameter value for a given key.
export function SetLSParam<V = string> (key: Params, value: V) {
  if (!value) {
    return localStorage.removeItem(key);
  }
  return localStorage.setItem(key, `${value}`);
}