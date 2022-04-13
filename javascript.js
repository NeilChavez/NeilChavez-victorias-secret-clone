const selectElement = (selector)=>{
    const element = document.querySelector(selector);
    if(selector) return element;
    throw new Error(`qualcosa e' andato storto, controlla che ${selector} esista`)
}


const menuElement = selectElement('.menu'),
      openIcon = selectElement('.open-icon'),
      closeIcon = selectElement('.close-icon');


  openIcon.addEventListener('click', () =>{

    menuElement.classList.toggle('actived');

  })    

  closeIcon.addEventListener('click', ()=>{
      menuElement.classList.toggle('actived')
  })
