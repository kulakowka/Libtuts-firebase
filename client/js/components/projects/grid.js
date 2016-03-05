import Item from './item'

export default function Projects (list) {
  return (
    <div class='projectsGrid'>
      {list && list.map(Item)}
    </div>
   )
}
