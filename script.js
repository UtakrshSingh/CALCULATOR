const buttons = document.getElementsByClassName(`buttons`);
const inputfield = document.getElementById(`number-input`);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(`click`, (event) => {
    switch (event.target.innerHTML) {
      case 'C':
        inputfield.value = null;
        break;
      case '=':
        try
        {
          inputfield.value = eval(inputfield.value); 
        }
        catch(e)
        {
          inputfield.value = null;
        }
        
        break;
      case 'B':
        inputfield.value = inputfield.value.slice(0, inputfield.value.length-1);
        break;

      default:
        inputfield.value = `${inputfield.value}${event.target.innerHTML}`;
        
    }
    

  });

}