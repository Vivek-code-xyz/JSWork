import { useState,useRef,useEffect } from 'react';


/**
 * # useToast
 * A hook that manages a list of temporary toast notifications —
 * each with a unique id and message — that auto-dismiss after a set duration.
 * Also cleans up any pending timers if the consuming component unmounts.
 *
 * @param {none}
 * - this hook takes no parameters
 *
 * @returns {object}
 * - **toasts** - the current array of active toast objects (`{ id, message }`)
 * - **addToast** - `(message, duration = 3000) => void` — adds a new toast, auto-removed after `duration` ms
 * - **removeToast** - `(id) => void` — manually removes a toast by its id before it auto-dismisses
 *
 * @example
 * const { toasts, addToast, removeToast } = useToast();
 * addToast("Item added to cart");
 * addToast("Something went wrong", 5000);
 */
const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const timerIds = useRef([]); // track every timeout we schedule
    const addToast = (message,duration = 3000) => {
        // 1. create a new toast object with a unique id + the message
        // 2. add it to the toasts array (without mutating the existing array)
        const newToast = {
            id: Date.now(),
            message
        }

        setToasts(prev => [...prev, newToast])

        const timerId = setTimeout(()=>{
            removeToast(newToast.id)
        },duration)
        timerIds.current.push(timerId);
    };

    useEffect(()=>{
        return()=>{
            timerIds.current.forEach(id=>clearTimeout(id));
        }
    },[])

    const removeToast = (id) => {
        setToasts(prev=>prev.filter(toast=>toast.id !== id))
    };

    return { toasts, addToast ,removeToast};
};

