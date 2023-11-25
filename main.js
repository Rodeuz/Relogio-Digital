setInterval(() => {
  Hours();
  troca();
}, 1000);

function Hours() {
  let dataAtual = new Date();

  document.querySelector("#hour").innerHTML = dataAtual.getHours() < 10 ? `0${dataAtual.getHours()}` : dataAtual.getHours();
  document.querySelector("#minutes").innerHTML = dataAtual.getMinutes() < 10 ? `0${dataAtual.getMinutes()}` : dataAtual.getMinutes();
  document.querySelector("#seconds").innerHTML = dataAtual.getSeconds() < 10 ? `0${dataAtual.getSeconds()}` : dataAtual.getSeconds();
}

function troca() {
  let dataAtual = new Date();

  if (dataAtual.getHours() > 6) {
    document.querySelectorAll("[data-time]").forEach((e) => {
      e.dataset.time = "claro";
    });
  } else {
    document.querySelectorAll("[data-time]").forEach((e) => {
      e.dataset.time = "escuro";
    });
  }
  // document.querySelectorAll("data-time").forEach((e) => {
  //   dataAtual.getHours() < 6 ?  : dataAtual.getHours();
}
