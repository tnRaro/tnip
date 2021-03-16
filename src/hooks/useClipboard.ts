import { useCallback, useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<any>(null);
  let timerId: NodeJS.Timeout;
  const copy = useCallback(async (text: string) => {
    clearTimeout(timerId);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      timerId = setTimeout(() => { setCopied(false) }, 3000);
    } catch (e) {
      setError(e);
    }
  }, []);
  return [copied, copy, error] as [boolean, (text: string) => Promise<void>, any];
}
