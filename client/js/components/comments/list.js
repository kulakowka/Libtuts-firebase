import Item from './item'

export default function Comments (list) {
  if (!list) return <p>loading...</p>

  return <div class='commentsList'>{list.map(Item)}</div>
}
