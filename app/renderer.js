const fakeEntries = [
  { name: 'foo', description: 'this is what foo does' },
  { name: 'bar', description: 'this is what bar does' },
  { name: 'baz', description: 'this is what baz does' },
  { name: 'bing', description: 'this is what bing does' },
  { name: 'bang', description: 'this is what bang does' },
  { name: 'bop', description: 'this is what bop does' },
  { name: 'bippity', description: 'this is what bippity does' },
  { name: 'boppity', description: 'this is what boppity does' },
  { name: 'boo', description: 'this is what boo does' }
];

const state = {
  selected: null,
  options: fakeEntries.slice()
};

const search = document.querySelector('#search');
const options = document.querySelector('#options');
const content = document.querySelector('.content');

const updateOptions = () => {
  options.innerHTML = '';
  state.options.forEach(entry => {
    const optionElement = document.createElement('li');
    optionElement.innerHTML = entry.name;
    if (entry.name === state.selected) {
      optionElement.id = 'selected';
    }
    options.appendChild(optionElement);
  });
};

const updateContent = () => {
  if (state.selected) {
    const entry = fakeEntries.find(e => e.name === state.selected);
    const header = document.createElement('h1');
    header.innerHTML = entry.name;
    const description = document.createElement('p');
    description.innerHTML = entry.description;
    content.innerHTML = '';
    content.appendChild(header);
    content.appendChild(description);
  } else {
    content.innerHTML = '';
  }
};

const selectOption = option => {
  state.selected = option;
  updateOptions();
  updateContent();
};

search.addEventListener('input', event => {
  const term = event.target.value;
  state.options = fakeEntries.filter(s => s.name.includes(term));
  updateOptions();
});

options.addEventListener('click', event => {
  if (event.target.tagName !== 'UL') {
    selectOption(event.target.innerHTML);
  } else {
    selectOption(null);
  }
});

updateOptions();
