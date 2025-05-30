export function getImageUrl(person, size='s') {
  return (
    'http://i.imgur.com/' + person.imageId + size + '.jpg'
  );
}