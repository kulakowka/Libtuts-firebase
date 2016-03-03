import m from 'mithril'
import Item from './item'

export default function Languages (items) {
  return (
    <div>
      {items.map(Item)}
    </div>
   )
}
