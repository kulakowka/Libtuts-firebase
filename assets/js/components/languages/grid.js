import m from 'mithril'
import Item from './item'

export default function Languages (items) {
  return (
    <div class='languagesGrid'>
      {items.map(Item)}
    </div>
   )
}
