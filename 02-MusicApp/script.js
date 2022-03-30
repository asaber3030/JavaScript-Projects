window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#1f80a8',
    '#20c997',
    '#924a24',
    '#212529',
    '#6f42c1',
    '#b84743',
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    });
  };

});