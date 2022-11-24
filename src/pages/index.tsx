import { GetServerSideProps } from "next";
import { useClipboard } from "../hooks/useClipboard";
import { getIp } from "../utils/getIp";
type PageProps = {
  ip: string;
}
export default function Page(props: PageProps) {
  const [copied, copy] = useClipboard();
  const ip = props.ip;
  return (
    <div className="container">
      <button
        id="ip"
        disabled={copied}
        onChange={() => { }}
        onClick={() => { copy(ip) }}
      >
        {copied ? "copied" : ip}
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ip = getIp(context.req);
  return {
    props: {
      ip
    }
  };
}
