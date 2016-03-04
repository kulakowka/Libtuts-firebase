import m from 'mithril'
import Item from './item'

export default function Projects (items) {
  return (
    <div class='projectsGrid'>
      {items.map(Item)}
    </div>
   )
}
