import { App as SlackApp } from "@slack/bolt";

export class SlackProvider {
  private slackApp: SlackApp;
  constructor() {
    this.slackApp = new SlackApp({
      token: process.env.SLACK_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
    });
  }

  async getTokenFromCode(code: string) {
    console.log({
      code,
      client_id: process.env.NEXT_PUBLIC_SLACK_CLIENT_ID as string,
      client_secret: process.env.SLACK_CLIENT_SECRET as string,
    });
    const response = await this.slackApp.client.oauth.v2.access({
      code,
      client_id: process.env.NEXT_PUBLIC_SLACK_CLIENT_ID as string,
      client_secret: process.env.SLACK_CLIENT_SECRET as string,
    });

    console.log({ response });

    return response;
  }
}
