import {X} from 'lucide-react'


/**
 * # ToastContainer
 * A presentational component that renders a list of toast notifications
 * and lets the user dismiss any of them early via a close icon.
 * Pairs with the `useToast` hook, which owns the toast data and logic.
 *
 * @param {object} props
 * - **toasts** - array of toast objects (`{ id, message }`) to display
 * - **removeToast** - `(id) => void` function to dismiss a specific toast
 *
 * @returns {JSX.Element}
 * - a fixed-position container rendering each toast with its message and a close button
 *
 * @example
 * const { toasts, addToast, removeToast } = useToast();
 * return <ToastContainer toasts={toasts} removeToast={removeToast} />;
 */
const ToastContainer = ({ toasts,removeToast  }) => {
  return (
    <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
      {/* render each toast's message here using .map() */}
      {toasts.map(toast=> (
        <div key={toast.id}>
            {toast.message}
            <button onClick={()=>removeToast(toast.id)}>
                <X size={16}/>
            </button>
        </div>

      ))}
    </div>
  );
};

export default ToastContainer;