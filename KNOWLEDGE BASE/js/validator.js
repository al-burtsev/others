let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);

const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C06;',
  },
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF5C00;',
  },
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      rule: 'number',
      errorMessage: "Поле заполнено неверно",
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: "Поле заполнено неверно",
    },
  ]);