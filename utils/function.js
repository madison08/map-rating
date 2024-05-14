import fetch from "node-fetch";

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function getWebSocketUrl() {
  try {
    const response = await fetch("http://127.0.0.1:9222/json/version");
    const data = await response.json();
    return data.webSocketDebuggerUrl;
  } catch (e) {
    throw new Error("Error while getting webSocketDebuggerUrl");
  }
}

export { delay, getWebSocketUrl };
