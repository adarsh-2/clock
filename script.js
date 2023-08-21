setInterval(() => {
  const date = new Date();
  const time = document.getElementById("time");

  const currentTime =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());

  time.innerHTML = currentTime;
}, 1000);
