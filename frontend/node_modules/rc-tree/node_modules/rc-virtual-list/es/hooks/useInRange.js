import { useRef } from 'react';
export default function useInRange(scrollHeight, containerHeight) {
  var scrollHeightRef = useRef();
  var containerHeightRef = useRef();
  scrollHeightRef.current = scrollHeight;
  containerHeightRef.current = containerHeight;
  return function (scrollTop) {
    var newTop = Math.max(scrollTop, 0);
    var min = scrollHeightRef.current - containerHeightRef.current;

    if (!Number.isNaN(min)) {
      newTop = Math.min(newTop, min);
    }

    return newTop;
  };
}