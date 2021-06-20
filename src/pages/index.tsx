import { useAtom } from 'jotai';
import { GetServerSideProps } from 'next';
import { useEffect, useState, VoidFunctionComponent } from 'react';
import { errorAtom } from '../atoms/errors';
import { CopyIcon } from '../components/CopyIcon';
import { useClipboard } from '../hooks/useClipboard';
import { button } from '../styles/button';
import { flex } from '../styles/flex';
import { input } from '../styles/input';
type PageProps = {
  ip: string;
}
const Page: VoidFunctionComponent<PageProps> = (props) => {
  const [copied, copy] = useClipboard();
  const [ip, setIp] = useState<string | null>(null);
  const [error] = useAtom(errorAtom);
  useEffect(() => {
    setIp(props.ip);
  }, [props.ip]);
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
            margin: "-4px",
            "@bp1": {
              flexDirection: "column"
            }
          },
        })}>
          <input
            className={input({
              css: {
                width: "90%",
                flex: "1 1",
                margin: "4px",
                fontWeight: 700,
                fontSize: 20,
                textOverflow: "ellipsis",
                "@bp1": {
                  textAlign: "center"
                }
              }
            })}
            value={ip ?? "..."}
            onChange={() => { }}
            onFocus={(e) => {
              const target = e.target;
              target.select();
            }}
          />
          <button
            className={button({
              css: {
                margin: "4px",
                "@bp1": {
                  width: "90%"
                }
              },
              color: "accent"
            })}
            onClick={() => {
              if (ip != null) {
                copy(ip);
              }
            }}
            disabled={copied || ip === null}
          >
            <CopyIcon />
            <div className={flex({ css: { marginLeft: 8 } })}>
              {copied ? "복사완료" : "복사하기"}
            </div>
          </button>
        </div>
        {error != null &&
          <div className={flex({
            css: {
              background: "$error",
              color: "white",
              flexDirection: "column",
              padding: "1em",
              borderRadius: "4px",
            }
          })}>
            {String(error)}
          </div>
        }
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ip = context.req.headers["x-forwarded-for"] ??
    context.req.socket.remoteAddress;
  return {
    props: {
      ip
    }
  };
}

export default Page;
