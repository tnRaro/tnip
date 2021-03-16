import { useCallback, useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  let timerId: NodeJS.Timeout;
  const copy = useCallback(async (text: string) => {
    clearTimeout(timerId);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      timerId = setTimeout(() => { setCopied(false) }, 3000);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return [copied, copy] as [boolean, (text: string) => Promise<void>];
}
