const displayFollwers = (followers) => {
  const newFollowers = followers
    .map(({ login: name, avatar_url: image, html_url: url }) => {
      return `<article class="card">
            <img
              src="${image}"
              alt="${name}"
            />
            <h4>${name}</h4>
            <a href="${url}" class="btn">view profile</a>
          </article>`;
    })
    .join('');

  return newFollowers;
};

export default displayFollwers;
