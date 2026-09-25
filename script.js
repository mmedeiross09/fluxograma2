const details = {
  observar: 'Observar: satélites, sensores e imagens de drones podem acompanhar áreas verdes, nascentes e espécies em tempo real.',
  entender: 'Entender: modelos de IA cruzam dados históricos para revelar padrões, prever secas, incêndios e desequilíbrios.',
  agir: 'Agir: com previsões mais precisas, comunidades e gestores podem economizar água, energia e reduzir desperdícios.',
  regenerar: 'Regenerar: medir os resultados faz a tecnologia aprender com cada ação e direciona novos ciclos de recuperação.'
};

document.querySelectorAll('.learn-more').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.flow-card');
    const panel = document.querySelector('#detail-panel');
    document.querySelectorAll('.flow-card').forEach((item) => item.classList.remove('active-card'));
    card.classList.add('active-card');
    panel.innerHTML = `<strong>${details[card.dataset.step].split(':')[0]}:</strong>${details[card.dataset.step].split(':').slice(1).join(':')}`;
    panel.classList.add('visible');
  });
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('focus-mode');
});

const ideas = [
  'Ideia: use sensores simples para regar uma horta comunitária apenas quando o solo realmente precisar.',
  'Ideia: crie um mapa colaborativo de pontos de coleta e use dados para reduzir o caminho dos resíduos.',
  'Ideia: acompanhe o consumo de energia da sua escola e transforme a economia em uma meta coletiva.',
  'Ideia: observe espécies do seu bairro e registre as mudanças para apoiar a conservação local.'
];
let ideaIndex = 0;
document.querySelector('#inspire-button').addEventListener('click', () => {
  const output = document.querySelector('#idea-output');
  output.textContent = ideas[ideaIndex % ideas.length];
  ideaIndex += 1;
});
