window.addEventListener('load', () => {
  const h1 = document.querySelector('h1.public')
  if (h1) {
    const publicLabel = document.createElement('span')
    publicLabel.setAttribute('class', 'Label Label--outline v-align-middle')
    publicLabel.setAttribute('style', 'color: red; border-color: red;')
    publicLabel.innerHTML = 'Public'
    h1.appendChild(publicLabel)
  }
})
