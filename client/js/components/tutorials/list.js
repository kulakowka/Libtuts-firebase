import m from 'mithril'
import Item from './item'

export default function Tutorials (items) {
  return (
    <div class='tutorialsList'>
      {items.map(Item)}
    </div>
   )
}
