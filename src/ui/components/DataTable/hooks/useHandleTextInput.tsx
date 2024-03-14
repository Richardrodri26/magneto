import { useEffect, useState } from 'react';

export type HandleInput = React.ChangeEvent<HTMLInputElement>;

export const useHandleTextInputWithTimer = (handle: (value?: string) => void, queryValue: string = '') => {
  const [loading, setLoading] = useState(false);
  const [timerId, setTimerId] = useState<undefined | NodeJS.Timeout>(undefined);
  const [searchValue, setSearchValue] = useState<string>(queryValue);

  useEffect(() => {
    setSearchValue(queryValue);
  }, [queryValue]);

  const handleInput = async (e: HandleInput) => {
    const { value } = e.target;
    if (timerId) {
      clearTimeout(timerId);
    }
    setSearchValue(value);
    if (value !== queryValue || !value) {
      const newTimerId = setTimeout(() => {
        handle(value);
        setLoading(false);
      }, 1000);
      setTimerId(newTimerId);
    } else {
      setLoading(false);
    }
    setLoading(true);
  };

  const removeSearchInput = () => {
    handle();
    setSearchValue('');
    setLoading(false);
  };

  return { loading, searchValue, handleInput, removeSearchInput, setSearchValue };
};
