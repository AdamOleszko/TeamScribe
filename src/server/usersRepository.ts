import { createKysely } from "@vercel/postgres-kysely";

interface Database {
  users: any;
}

const db = createKysely<Database>();

export const updateUser = async (email: string, newData: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  await db
    .updateTable("users")
    .where("email", "=", email)
    .set(newData)
    .execute();
};
