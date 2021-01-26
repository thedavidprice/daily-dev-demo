import { Link, routes } from '@redwoodjs/router'

const NewPage = () => {
  return (
    <>
      <h1>NewPage</h1>
      <p>
        Find me in <code>./web/src/pages/NewPage/NewPage.js</code>
      </p>
      <p>
        My default route is named <code>new</code>, link to me with `
        <Link to={routes.new()}>New</Link>`
      </p>
    </>
  )
}

export default NewPage
