(function() {
  const APP_KEY = "PUSHER_APP_KEY";
  const APP_CLUSTER = "PUSHER_APP_CLUSTER";
  const logDiv = document.getElementById("logs");
  const pusher = new pusher(APP_KEY, {
    cluster: APP_CLUSTER
  });
  const channel = pusher.subscribe("realtime-terminal");
  channel.bind("logs", data => {
    const divElement = document.createElement("div");
    divElement.innerHTML = data;

    logDiv.appendChild(divElement);
  });
})();
