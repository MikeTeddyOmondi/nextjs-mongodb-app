import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionClient, createAdminClient } from "@/lib/appwrite/config";

export const auth = {
  user: null,

  getUser: async () => {
    if (auth.user) {
      return auth.user;
    }

    const sessionCookie = cookies().get("session");
    const { account } = await createSessionClient(sessionCookie?.value);
    try {
      auth.user = await account.get();
    } catch (error) { }

    return auth.user;
  },
  signOut: async () => {
    const sessionCookie = cookies().get("session");
    const { account } = await createSessionClient(sessionCookie?.value);

    account.deleteSession("current");
    cookies().delete("session");
    auth.user = null;
  },

  signupUser: async (formData) => {
    "use server"
    const data = Object.fromEntries(formData);
    console.log({ data })
    const { email, password, username } = data;

    const { account } = await createAdminClient();
    const promise = account.create(ID.unique(), email, password, username);

    promise.then(function (response) {
      console.log({ response }); // Success
    }, function (error) {
      console.log({ error }); // Failure
    });
  },

  createSession: async (formData) => {
    "use server";
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(
      email,
      password
    );

    cookies().set("session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });
    redirect("/");
  },
};
