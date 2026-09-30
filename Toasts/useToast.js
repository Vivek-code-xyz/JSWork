import { useState, useRef, useEffect } from 'react';

/**
 * # useToast
 * A hook that manages a list of temporary toast notifications —
 * each with a unique id, message, and type — that auto-dismiss after a set duration.
 * Also cleans up any pending timers if the consuming component unmounts.
 *
 * @param {none}
 * - this hook takes no parameters
 *
 * @returns {object}
 * - **toasts** - the current array of active toast objects (`{ id, message, type }`)
 * - **addToast** - `(message, type = 'info', duration = 3000) => void` — adds a new toast, auto-removed after `duration` ms
 * - **removeToast** - `(id) => void` — manually removes a toast by its id before it auto-dismisses
 *
 * @example
 * const { toasts, addToast, removeToast } = useToast();
 * addToast("Item added to cart", "success");
 * addToast("Something went wrong", "error", 5000);
 */
const useToast = () => {
  const [toasts, setToasts] = useState([]);
  const timerIds = useRef([]);

  const addToast = (message, type = 'info', duration = 3000) => {
    const newToast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts(prev => [...prev, newToast]);

    const timerId = setTimeout(() => {
      removeToast(newToast.id);
    }, duration);
    timerIds.current.push(timerId);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  useEffect(() => {
    return () => {
      timerIds.current.forEach(id => clearTimeout(id));
    };
  }, []);

  return { toasts, addToast, removeToast };
};

export default useToast;