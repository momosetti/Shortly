import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://urlbae.com/api/url/add", {
        method: "POST",
        headers: {
          Authorization: "Bearer 4ef1bdfe2a0339b0826879d3af242bfa",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: req.body.url,
        }),
      });
      console.log(req.body.url);
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
