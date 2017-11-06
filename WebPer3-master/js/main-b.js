"use strict";

const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  })
.then((json) => {
    console.long(json);
    let html = '';
    json.forEach((kuva) => {
    html += `<li>
                  <figure>
                    <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/"${kuva.mediaThumb}"></a>
                    <figcaption>
                        <h3>title</h3>
                    </figcaption>
                  </figure>;
                </li>
    const ul = document.querySelector('ul');
    ul.innerHTML = text;
  })
};

showImages();`