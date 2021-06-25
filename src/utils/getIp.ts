import { IncomingMessage } from "http";

export const getIp = (req: IncomingMessage) => {
  const ip = req.headers["x-forwarded-for"] ??
    req.socket.remoteAddress;
  return ip;
}