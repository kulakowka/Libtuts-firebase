import m from 'mithril'
import Item from './item'

export default function Languages (list) {
  if (list) {
    return (
      <div class='languagesGrid'>
        {list.map(Item)}
      </div>
     )
  } else {
    return (
      <p>No languages</p>
    )
  }
}
