import { useUpdateAtom } from "jotai/utils";
import { useCallback, useState } from "react";
import { errorAtom } from "../atoms/errors";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);
  const setError = useUpdateAtom(errorAtom);
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
  return [copied, copy] as const;
}
