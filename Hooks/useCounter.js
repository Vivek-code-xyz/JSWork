import { useState } from 'react';

/**
 * # useCounter
 * A generic hook that manages a number with increment, decrement, reset,
 * and set controls. Optionally limited by `min` and `max`, and moved by a
 * custom `step`. Useful for quantity pickers, ratings, steppers, or any counter.
 *
 * @param {number} [initialValue=0]
 * - **initialValue** - the starting number (clamped into `min` and `max` if they are set)
 * @param {object} [options={}]
 * - **min** - the lowest allowed value (defaults to no limit)
 * - **max** - the highest allowed value (defaults to no limit)
 * - **step** - how much `increment` and `decrement` change the value (defaults to `1`)
 *
 * @returns {object}
 * - **count** - the current number
 * - **increment** - `() => void` — increases the count by `step`, stopping at `max`
 * - **decrement** - `() => void` — decreases the count by `step`, stopping at `min`
 * - **reset** - `() => void` — returns the count to `initialValue`
 * - **set** - `(value) => void` — jumps to a specific value, clamped into `min` and `max`
 *
 * @example
 * const { count, increment, decrement } = useCounter(1, { min: 1, max: 10 });
 * <button onClick={decrement}>-</button> {count} <button onClick={increment}>+</button>
 */
const useCounter = (initialValue = 0, options = {}) => {
  // TODO: destructure min, max, and step from the parameters with defaults
  // (min = -Infinity, max = Infinity, step = 1) and keep the `= {}` guard,
  // then delete the placeholder `options` parameter above

  const {min=-Infinity,max=Infinity,step=1}=options;


  // TODO: write ONE clamp function: (n) => keeps n between min and max
  // hint: Math.min(max, Math.max(min, n))
  const clamp = (n)=>Math.min(max,Math.max(min,n));

  // TODO: create the state `count` using a lazy initializer that clamps initialValue
  // hint: useState(() => ...)
  const [count,setCount]=useState(()=>clamp(initialValue));

  // TODO: increment -> functional updater, add step, clamp the result
  const increment = ()=>setCount((c)=>clamp(c+step));

  // TODO: decrement -> functional updater, subtract step, clamp the result
  const decrement = ()=>setCount((c)=>clamp(c-step));

  // TODO: reset -> back to the clamped initialValue
  const reset = ()=>setCount(clamp(initialValue));

  // TODO: set -> jump to a given value, clamped
  const set = (value)=>setCount(clamp(value));

  // TODO: return { count, increment, decrement, reset, set }
  return {count,increment,decrement,reset,set};
};

export default useCounter;