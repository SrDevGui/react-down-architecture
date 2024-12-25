import {Link} from 'react-router'
export function Body(){
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </header>
      <h1>Welcome to a architecture React Dow Guide created by <strong>Guilherme Alves</strong></h1>
      <p>You can copy and use this code as you want</p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, minus. At temporibus nihil sint saepe quam numquam sapiente? Blanditiis consectetur inventore odit quidem repellat commodi rem qui sint ipsa obcaecati!
    </div>
  )
}