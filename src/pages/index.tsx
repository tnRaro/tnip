import { useEffect, useState, VoidFunctionComponent } from 'react';
import { CopyIcon } from '../components/CopyIcon';
import { useClipboard } from '../hooks/useClipboard';
import { css } from '../stitches.config';
import { button } from '../styles/button';
import { flex } from '../styles/flex';
import { input } from '../styles/input';
type PageProps = {}
const Page: VoidFunctionComponent<PageProps> = (props) => {
  const [copied, copy] = useClipboard();
  const [ip, setIp] = useState<string>("...");
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
    <div className={flex({
      css: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }
    })}>
      <div className={flex({
        css: {
          width: 320,
          alignItems: "center",
        }
      })}>
        <input
          className={input({
            css: {
              width: 0,
              flex: "1 1",
              fontWeight: 700,
              fontSize: 20,
              textOverflow: "ellipsis"
            }
          })}
          value={ip}
          onChange={() => { }}
          onFocus={(e) => {
            const target = e.target;
            target.select();
          }}
        />
        <button
          className={button({
            css: {
              width: 102.89,
              justifyContent: "flex-start"
            },
            color: "accent"
          })}
          onClick={() => {
            copy(ip)
          }}
        >
          <CopyIcon />
          <div className={flex({ css: { marginLeft: 8 } })}>
            {copied ? "복사됨" : "복사하기"}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Page;
