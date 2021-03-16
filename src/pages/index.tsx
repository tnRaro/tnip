import { useEffect, useMemo, useState, VoidFunctionComponent } from 'react';
import { CopyIcon } from '../components/CopyIcon';
import { useClipboard } from '../hooks/useClipboard';
import { button } from '../styles/button';
import { flex } from '../styles/flex';
import { input } from '../styles/input';
type PageProps = {}
const Page: VoidFunctionComponent<PageProps> = (props) => {
  const [copied, copy, error] = useClipboard();
  const [ip, setIp] = useState<string>("...");
  const [ipFetchError, setIpFetchError] = useState<any>(null);
  const errors = useMemo(
    () => [error, ipFetchError].filter(e => e),
    [error, ipFetchError]
  );
  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then(({ ip }) => {
        setIp(ip);
      })
      .catch((error) => {
        setIpFetchError(error);
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
          flexDirection: "column"
        }
      })}>
        <div className={flex({
          css: {
            alignItems: "center",
            when: {
              "@media (max-width: 320px)": {
                flexDirection: "column"
              }
            }
          },
        })}>
          <input
            className={input({
              css: {
                width: "100%",
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
              copy(ip);
            }}
          >
            <CopyIcon />
            <div className={flex({ css: { marginLeft: 8 } })}>
              {copied ? "복사됨" : "복사하기"}
            </div>
          </button>
        </div>
        <div className={flex({
          css: {
            color: "$error",
            flexDirection: "column"
          }
        })}>
          {errors.map((error) => {
            return (
              <div className={flex({})}>
                {error?.toString()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
