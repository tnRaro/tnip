import { useCallback, useEffect, useMemo, useState, VoidFunctionComponent } from 'react';
import { Button } from '../components/Button';
import { CopyIcon } from '../components/CopyIcon';
import { Flex } from '../components/Flex';
import { Input } from '../components/Input';

const useTimeout = (cb: () => void, delay: number) => {
  const callback = useCallback(cb, [cb]);
  const [value, forceUpdate] = useState({});
  useEffect(() => {

  }, [value]);
  return 
}
const useClipboard = () => {
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

type PageProps = {}
const Page: VoidFunctionComponent<PageProps> = (props) => {
  const [copied, copy] = useClipboard();
  const [ip, setIp] = useState("");
  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then(({ ip }) => {
        setIp(ip);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Flex css={{
      height: "100vh",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Flex css={{
        width: 320,
        alignItems: "center",
      }}>
        <Input
          css={{
            width: 0,
            flex: "1 1",
            fontWeight: 700,
            fontSize: 20,
            textOverflow: "ellipsis"
          }}
          value={ip}
          onChange={() => { }}
          onFocus={(e) => {
            const target = e.target;
            target.select();
          }}
        />
        <Button
          css={{
            width: 102.89,
            justifyContent: "flex-start"
          }}
          color="accent"
          onClick={() => {
            copy(ip)
          }}
        >
          <CopyIcon />
          <Flex css={{ marginLeft: 8 }}>
            {copied ? "복사됨" : "복사하기"}
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Page;
