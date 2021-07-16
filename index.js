const counter = function () {
   const btns = document.querySelectorAll('.counter__btn'); 
   btns.forEach(btn => {
   btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const value = this.parentElement.querySelector('.counter__value');
      const currentValue = +value.textContent;
      let newValue;  

      if (direction === 'plus') {
         newValue = currentValue + 1 < 999 ? currentValue + 1 : 999
      } else {
         newValue = currentValue - 1 > 0 ? currentValue - 1 : 0
      }

      value.textContent = newValue;
      })
   })
}

counter();