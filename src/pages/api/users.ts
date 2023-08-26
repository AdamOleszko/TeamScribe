import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { updateUser } from "@/server/usersRepository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).send("Unauthorized");
  }

  console.log("endpoint", { session });

  // const id = session.user.id;

  if (req.method === "PUT") {
    const parsedBody = JSON.parse(req.body);
    const newData = parsedBody.newData;
    console.log({ body: req.body });
    await updateUser(session.user.email!, newData);

    return res.status(200).json({});
  }

  return res.send("Method not allowed.");
}
