import Notiflix from 'notiflix';

export default function NotFound() {
  console.log('Error path');
  Notiflix.Notify.warning('Sorry, something went wrong.... Please try again.');

  return;
}