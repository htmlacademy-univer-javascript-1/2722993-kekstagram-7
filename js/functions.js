// eslint-disable-next-line strict -- Этот файл подключён обычным скриптом, а не модулем.
'use strict';

const checkStringLength = (value, maxLength) => value.length <= maxLength;

const isPalindrome = (value) => {
  const normalizedValue = value.toLowerCase().replaceAll(' ', '');
  let reversedValue = '';

  for (let i = normalizedValue.length - 1; i >= 0; i--) {
    reversedValue += normalizedValue[i];
  }

  return normalizedValue === reversedValue;
};

const extractDigits = (value) => {
  const characters = value.toString();
  let digits = '';

  for (let i = 0; i < characters.length; i++) {
    if (!Number.isNaN(parseInt(characters[i], 10))) {
      digits += characters[i];
    }
  }

  return parseInt(digits, 10);
};

checkStringLength('проверяемая строка', 18);
isPalindrome('ДовОд');
extractDigits('агент 007');
