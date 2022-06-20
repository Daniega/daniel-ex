$(document).ready(() => {
  $('.footer-show').on('click', handleToggle);
  $('.footer-show-tablet').on('click', handleToggle);
});

const handleToggle = evt => {
  $(evt.target).parents('.card').children('.show-more-container').slideToggle('fast');

  const element = $(evt.target).parents('.card').children('.show-more-container');
  //get back to display:"flex" style instead of default display:"block"
  if (element[0].style.display === 'block') {
    element[0].style.display = 'flex';
  }

  //handle toggling chevron next to text
  let chevron = $(evt.target).children('.chevron')[0];
  let img = chevron.childNodes[0];
  chevron.removeChild(chevron.firstChild)

  if(img.alt === "chevron-down"){
    img.alt = "chevron-up";
    img.src = './assets/chevron-up.svg'
  } else {
    img.alt = "chevron-down";
    img.src = './assets/chevron-down.svg'
  }
  chevron.appendChild(img);
  
  if (evt.target.innerText === 'Show more') {
      evt.target.innerText = 'Show less';
  } else {
      evt.target.innerText = 'Show more';
  }
  evt.target.appendChild(chevron);
};
