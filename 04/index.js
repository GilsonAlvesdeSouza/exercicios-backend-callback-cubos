let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;


let countTempoAlarmado = 0;
const alarm = (tempoAlarmandoEmSegundos) => {
  const clearTempoAlarmado = setInterval(() => {
    console.log("Beep beep!");
    countTempoAlarmado++;
    if (countTempoAlarmado >= tempoAlarmandoEmSegundos) {
      clearInterval(clearTempoAlarmado);
      console.log("Alarme finalizado!");
    }

  }, 1000);
};
console.log(`Timer iniciado, disparando em ${tempoParaAlarmarEmSegundos} segundos`);

setTimeout(alarm, tempoParaAlarmarEmSegundos * 1000, tempoAlarmandoEmSegundos);
