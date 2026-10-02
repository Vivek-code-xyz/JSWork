import { useState } from 'react';

/**
 * # useForm
 * A hook that manages multiple form field values as a single object,
 * with one shared `onChange` handler (driven by each input's `name`
 * attribute) and a `reset` to restore the original values.
 *
 * @param {object} [initialValues={}]
 * - **initialValues** - an object of starting field values, e.g. `{ name: '', email: '' }`
 *
 * @returns {object}
 * - **values** - the current object of all field values
 * - **onChange** - `(e) => void` — pass to any input's `onChange`; uses `e.target.name` to update the right field
 * - **reset** - `() => void` — resets all fields back to `initialValues`
 *
 * @example
 * const { values, onChange, reset } = useForm({ name: '', email: '' });
 * <input name="name" value={values.name} onChange={onChange} />
 * <input name="email" value={values.email} onChange={onChange} />
 * <button onClick={reset}>Clear</button>
 */
const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, onChange, reset };
};

export default useForm;