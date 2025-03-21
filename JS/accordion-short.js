class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this._el.querySelectorAll('.accordion__body').forEach((element) => {
      element.style.transition = `max-height ${this._config.duration}ms ease-out`;
    });
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  toggle(el) {
    el.classList.toggle('accordion__item_show');
    const accordionBody = el.querySelector('.accordion__body');
    if (accordionBody.style.maxHeight) {
      accordionBody.style.maxHeight = null;
    } else {
      accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`;
    }
  }
}
/*-------Добавили класс active--------*/
// const links = document.querySelectorAll('.accordion__header');
// for (let link of links) {
//   link.addEventListener('click', () => {
//     let activeLink = document.querySelector('active');
//     if (activeLink) {
//       activeLink.classList.remove('active');
//     }
//     link.classList.add('active');
//   })
// }
/*-------Добавили класс active при нажатии на другой элемент--------*/
const list = document.querySelectorAll('.accordion__header')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
})