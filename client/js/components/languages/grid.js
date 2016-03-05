import Item from './item'

export default function Languages (list) {
  if (!list) return <p>loading...</p>

  return (
    <div class='languagesGrid'>
      {list.map(Item)}
    </div>
   )
}
