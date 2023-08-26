"use client";
import { useEffect, useState } from "react";

export default function SlackPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSlackToken = async () => {
      const url = window.location.href;
      const code = url.split("?code=")[1] as string;
      console.log({ code, url });
      const response = await fetch(`/api/posts?code=${code}`, {
        method: "GET",
      });
      const parsedResponse = await response.json();
      const { access_token } = parsedResponse;
      await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify({ newData: { slack_token: access_token } }),
      });

      console.log({ parsedResponse });
    };

    fetchSlackToken()
      .then(() => console.log("done"))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Slack</h1>
    </div>
  );
}
