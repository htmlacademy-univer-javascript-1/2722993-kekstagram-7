// eslint-disable-next-line strict -- До задания о модулях файл подключён обычным скриптом.
'use strict';

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const AVATAR_COUNT = 6;
const MAX_MESSAGE_COUNT = 2;
const NAMES = ['Артём', 'Анна', 'Максим', 'София', 'Илья', 'Мария'];
const DESCRIPTIONS = [
  'Прогулка у моря',
  'Тихий вечер в городе',
  'Воспоминания о путешествии',
  'Солнечный выходной',
  'Красота в простых вещах',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lastId = 0;

  return () => ++lastId;
};

const createComment = (getCommentId) => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: Array.from({length: getRandomInteger(1, MAX_MESSAGE_COUNT)}, () => getRandomItem(MESSAGES)).join(' '),
  name: getRandomItem(NAMES),
});

const createPhotos = () => {
  const getCommentId = createIdGenerator();

  return Array.from({length: PHOTO_COUNT}, (_, index) => ({
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomItem(DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInteger(0, MAX_COMMENTS)}, () => createComment(getCommentId)),
  }));
};

createPhotos();
