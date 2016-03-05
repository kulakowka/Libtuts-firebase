import Item from './item'

export default function Languages (list) {
  return (
    <div class='languagesGrid'>
      {list && list.map(Item)}
    </div>
   )
}
