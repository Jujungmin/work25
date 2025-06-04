import './App.css';
import { getImageUrl } from "./utils.js";


function Avatar({person}) {
  return (
    <section className="card">
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={person.size}
        height={person.size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards}</b>
          {person.awardsInfo}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Avatar
        person={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'szV5sdG',
          size: 70,
          profession: 'physicist and chemist',
          awards: '4',
          awardsInfo: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
          discovered: 'polonium (chemical element)'
        }}
      />
      <Avatar
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
          size: 70,
          profession: 'geochemist',
          awards: '2',
          awardsInfo: '(Miyake Prize for geochemistry, Tanaka Prize)',
          discovered: 'a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  );
}