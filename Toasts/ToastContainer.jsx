import { X, CheckCircle, XCircle, Info } from 'lucide-react';

const toastStyles = {
  success: { icon: CheckCircle, color: '#22c55e' },
  error: { icon: XCircle, color: '#ef4444' },
  info: { icon: Info, color: '#3b82f6' },
};

/**
 * # ToastContainer
 * A presentational component that renders a list of toast notifications,
 * styled by type (success/error/info) with a matching icon and color,
 * and lets the user dismiss any of them early via a close icon.
 * Pairs with the `useToast` hook, which owns the toast data and logic.
 *
 * @param {object} props
 * - **toasts** - array of toast objects (`{ id, message, type }`) to display
 * - **removeToast** - `(id) => void` function to dismiss a specific toast
 *
 * @returns {JSX.Element}
 * - a fixed-position container rendering each toast with its icon, message, and close button
 *
 * @example
 * const { toasts, addToast, removeToast } = useToast();
 * return <ToastContainer toasts={toasts} removeToast={removeToast} />;
 */
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
      {toasts.map(toast => {
        const { icon: Icon, color } = toastStyles[toast.type] || toastStyles.info;

        return (
          <div
            key={toast.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderLeft: `4px solid ${color}`,
              marginBottom: '8px',
              padding: '8px 12px',
            }}
          >
            <Icon size={16} color={color} />
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)}>
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;