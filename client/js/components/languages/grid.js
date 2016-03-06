import Item from './item'

export default function Languages (list) {
  return (
    <section class='languagesGrid'>
      {list ? list.map(Item) : <p>loading...</p>}
    </section>
   )
}
