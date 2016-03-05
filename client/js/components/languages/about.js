import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function About (data) {
  if (!data) return <p>loading...</p>

  const {_id, name, projectsCount, tutorialsCount} = data
  const imgUrl = helpers.picUrl(_id)

  return (
    <div class='aboutLanguage'>
      <h1>{name}</h1>
      <img src={imgUrl}/>
      <div class='meta'>
        <p>{numeral(projectsCount).format('0,0')} projects</p>
        <p>{numeral(tutorialsCount).format('0,0')} tutorials</p>
      </div>
    </div>
   )
}
