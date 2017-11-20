'use strict';
// sama tehtynä funktiolla jossa ei ole kovakoodausta
const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

const linkkiTapahtumat = ()=> {
  const linkit = document.querySelectorAll('ul a');

  linkit.forEach((linkki) => {
    linkki.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.querySelector('img').src = linkki.href;
      if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('lightbox');
      }
    });
  });
  // foreachilla linkit läpi
  // lisää jokaiseen linkkiin click event
  //klikatessa hae href arvo ja laita se modalin img:n src
  // vaihda modalin luokaksi lightbox hiddenin sijaan

  const templateFunction = (json) => {
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
    });
    const element = document.querySelector('ul');
    element.innerHTML = html;
    linkkiTapahtumat()
  };

  loadJSON('kuvat.json', templateFunction);

  const suljeNappi = document.querySelector('.closebtn');
  const modal = document.querySelector('#modal');

  suljeNappi.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.replace('lightbox', 'hidden')
  });
};