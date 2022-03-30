new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.2,
  image1: './images/strip.png',
  image2: './images/stripe1.png',
  angle: Math.PI / 8,
  displacementImage: './images/stripe1mul.png'
});

new hoverEffect({
  parent: document.querySelector('.distortion2'),
  intensity: 0.2,
  image1: './images/dot.jpg',
  angle: Math.PI / 15,
  image2: './images/fluid.jpg',
  displacementImage: './images/heightMap.png'
});