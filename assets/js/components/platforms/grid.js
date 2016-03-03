import m from 'mithril'
import Item from './item'

export default function Platforms (items) {
  return (
    <div class='platformsGrid'>
      {items.map(Item)}
    </div>
   )
}
