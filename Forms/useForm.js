import { useEffect, useState } from 'react';

/**
 * # useForm
 * A hook that manages multiple form field values as a single object,
 * with one shared `onChange` handler (driven by each input's `name`
 * attribute), per-field validation via consumer-supplied rules, and
 * "touched" tracking so errors only appear after a field has been
 * blurred — plus a `reset` to restore everything to its initial state.
 *
 * @param {object} [initialValues={}]
 * - **initialValues** - an object of starting field values, e.g. `{ name: '', email: '' }`
 * @param {object} [validationRules={}]
 * - **validationRules** - an object mapping field names to validator functions; each takes the field's value and returns an error message string, or `undefined`/falsy if valid
 *
 * @returns {object}
 * - **values** - the current object of all field values
 * - **onChange** - `(e) => void` — pass to any input's `onChange`; uses `e.target.name` to update the right field
 * - **onBlur** - `(e) => void` — pass to any input's `onBlur`; marks that field as touched
 * - **reset** - `() => void` — resets all fields, errors, and touched state back to initial
 * - **errors** - an object mapping field names to their current error message, only for fields that are both invalid **and** touched
 *
 * @example
 * const { values, onChange, onBlur, reset, errors } = useForm(
 *   { name: '', email: '' },
 *   { email: (val) => !val.includes('@') ? 'Invalid email' : undefined }
 * );
 * <input name="email" value={values.email} onChange={onChange} onBlur={onBlur} />
 * {errors.email && <span>{errors.email}</span>}
 */
const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({});
  const [visibleErrors, setVisibleErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const reset = () => {
    setValues(initialValues);
    setError({});
    setTouched({});
    setVisibleErrors({});
  };

  useEffect(() => {
    const newErrors = {};
    const fields = Object.keys(validationRules);

    fields.forEach((key) => {
      const error = validationRules[key](values[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setError(newErrors);

    const newVisibleErrors = {};
    Object.keys(newErrors).forEach((key) => {
      if (touched[key]) {
        newVisibleErrors[key] = newErrors[key];
      }
    });
    setVisibleErrors(newVisibleErrors);
  }, [values, touched]);

  return { values, onChange, onBlur, reset, errors: visibleErrors };
};

export default useForm;