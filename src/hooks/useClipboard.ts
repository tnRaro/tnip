import { useCallback, useRef, useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const timerIdRef = useRef<number>(0);
  const copy = useCallback(async (text: string) => {
    clearTimeout(timerIdRef.current);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      timerIdRef.current = setTimeout(() => { setCopied(false) }, 3000) as unknown as number;
    } catch (e) {
      console.error(e);
      clearTimeout(timerIdRef.current);
    }
  }, []);
  return [copied, copy] as const;
}
