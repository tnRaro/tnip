import type { NextApiHandler } from "next"

const Handler: NextApiHandler = (req, res) => {
  const ip = req.headers["x-forwarded-for"] ??
    req.socket.remoteAddress ??
    req.connection.remoteAddress
  ;
  res.status(200).json({ ip });
}

export default Handler;
