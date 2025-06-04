import { getImageUrl } from './utils.js';

export default function Avatar({person}) {
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