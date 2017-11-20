export function createTypes<T>(obj: T, options?: { prefix: string; }) {
  const keys = Object.keys(obj);
  const getKey = (key: string) => options && options.prefix ? `${options.prefix}_${key}` : key;

  const mapTypes = (types, key) => {
    types[key] = getKey(key);
    return types;
  };
  return keys.reduce(mapTypes, {}) as { [key in keyof T]: string };
}

export function createReducer<T>(
  initialState: T,
  handlers: { [key: string]: (state: T, action: any) => T; }
) {
  if (!initialState) {
    throw new Error('initialState is required');
  }

  return (state = initialState, action) => {
    if (!action || !action.type) {
      return state;
    }

    const handler = handlers[action.type];

    return handler ? handler(state, action) : state;
  };
}
