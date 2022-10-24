let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

let countTempoAlarmado = 0;
let countSonecas = 0;
const alarm = (tempoSonecaEmSegundos, tempoAlarmandoEmSegundos, numeroDeSonecas) => {
  const clearTempoAlarmado = setInterval(() => {
    console.log("Beep beep!");
    countTempoAlarmado++;
    if (countTempoAlarmado >= tempoAlarmandoEmSegundos) {
      clearInterval(clearTempoAlarmado);
      countSonecas++;
      countTempoAlarmado = 0;
      if (countSonecas > numeroDeSonecas) {
        clearInterval(time);
        console.log("Fim do Timer!");
      } else {
        console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);
      }
    }
  }, 1000);


};
console.log(`Timer iniciado, disparando em ${tempoParaAlarmarEmSegundos} segundos`);

const time = setInterval(alarm, tempoParaAlarmarEmSegundos * 1000, tempoSonecaEmSegundos, tempoAlarmandoEmSegundos, numeroDeSonecas);







