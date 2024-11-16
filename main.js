fetch('data.js')
  .then(response => response.json())
  .then(data => {
    const title = data.title;
    const description = data.description;
    const list = data.list;
    render(title, description, list);
  });

function render(title, description, list) {
  const div = document.querySelector('div');
  div.innerHTML = `
    <h1>${title}</h1>
    <p>${description}</p>
    <ul>
      ${list.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}
