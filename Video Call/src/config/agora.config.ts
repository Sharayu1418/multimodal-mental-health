// Agora app configuration
export const agoraConfig = {
  appId: "56ec7191d6194c01b6b50ff62840c897",
  token: "007eJxTYJB60JNyxUa3wiUy4tCOfVJdGftq+/ZZx8yYFn+hPE68N1WBwdQsNdnc0NIwxczQ0iTZwDDJLMnUIC3NzMjCxCDZwtJcfmV4ekMgI0MLSywjIwMEgvgsDCGpxSUMDAD2RB1l",
  channelName: "Test",
  uid: Math.floor(Math.random() * 1000000)
} as const;

export const isValidAgoraConfig = () => {
  return agoraConfig.appId && agoraConfig.appId !== "YOUR_APP_ID_HERE";
};