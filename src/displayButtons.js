const displayButtons = (btnContainer, pages, index) => {
  const btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      pageIndex === index ? 'active-btn' : ''
    }" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  btns.unshift(`<button class="prev-btn">prev</button>`);
  btns.push(`<button class="next-btn">next</button>`);
  btnContainer.innerHTML = btns.join('');
};

export default displayButtons;
