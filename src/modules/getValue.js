const scoreValue = (name, score) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}:</td><td>${score}</td>`;
    return tr;
  };

export default scoreValue;