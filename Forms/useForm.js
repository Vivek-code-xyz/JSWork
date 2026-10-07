import { useEffect, useState } from 'react';

/**
 * # useForm
 * A hook that manages multiple form field values as a single object,
 * with one shared `onChange` handler (driven by each input's `name`
 * attribute), per-field validation via consumer-supplied rules,
 * "touched" tracking so errors only appear after a field has been
 * blurred, and a `handleSubmit` wrapper that blocks submission while
 * invalid — plus a `reset` to restore everything to its initial state.
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
 * - **handleSubmit** - `(onSubmit) => (e) => void` — wrap your submit logic; prevents default, validates all fields, touches all fields, and only calls `onSubmit(values)` if there are no errors
 * - **reset** - `() => void` — resets all fields, errors, and touched state back to initial
 * - **errors** - an object mapping field names to their current error message, only for fields that are both invalid **and** touched
 *
 * @example
 * const { values, onChange, onBlur, handleSubmit, reset, errors } = useForm(
 *   { name: '', email: '' },
 *   { email: (val) => !val.includes('@') ? 'Invalid email' : undefined }
 * );
 * <form onSubmit={handleSubmit((vals) => console.log('submitting', vals))}>
 *   <input name="email" value={values.email} onChange={onChange} onBlur={onBlur} />
 *   {errors.email && <span>{errors.email}</span>}
 * </form>
 */
const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({});
  const [visibleErrors, setVisibleErrors] = useState({});

  // Shared validation logic — used by both the auto-validate effect and handleSubmit,
  // so the rules for "what counts as an error" live in exactly one place.
  const getErrors = (currentValues) => {
    const newErrors = {};
    const fields = Object.keys(validationRules);

    fields.forEach((key) => {
      const error = validationRules[key](currentValues[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    return newErrors;
  };

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

  const touchAll = () => {
    const allTouched = Object.keys(initialValues).reduce((acc, key) => {
      return { ...acc, [key]: true };
    }, {});
    setTouched(allTouched);
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    touchAll();

    const newErrors = getErrors(values);
    setError(newErrors);
    setVisibleErrors(newErrors); // everything's touched now, so show all errors immediately

    if (Object.keys(newErrors).length === 0) {
      onSubmit(values);
    }
  };

  useEffect(() => {
    const newErrors = getErrors(values);
    setError(newErrors);

    const newVisibleErrors = {};
    Object.keys(newErrors).forEach((key) => {
      if (touched[key]) {
        newVisibleErrors[key] = newErrors[key];
      }
    });
    setVisibleErrors(newVisibleErrors);
  }, [values, touched]);

  return { values, onChange, onBlur, handleSubmit, reset, errors: visibleErrors };
};

export default useForm;