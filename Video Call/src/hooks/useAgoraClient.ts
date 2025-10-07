import { createClient, ClientConfig } from 'agora-rtc-react';

const config: ClientConfig = {
  mode: "rtc",
  codec: "vp8"
};

export const useAgoraClient = createClient(config);