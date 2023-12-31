import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { SlackProvider } from "@/server/slack";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).send("Unauthorized");
  }

  // const id = session.user.id;

  if (req.method === "GET") {
    const slackProvider = new SlackProvider();
    const response = await slackProvider.getTokenFromCode(
      req.query.code as string
    );

    return res.status(200).json(response);
  }

  return res.send("Method not allowed.");
}
