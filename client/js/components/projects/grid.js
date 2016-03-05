import Item from './item'

export default function Projects (list) {
  if (!list) return <p>loading...</p>

  return (
    <div class='projectsGrid'>
      {list.map(Item)}
    </div>
   )
}
