import Item from './item'

export default function Tutorials (list) {
  return (
    <section class='tutorialsList'>
      {list ? list.map(Item) : <p>loading...</p>}
    </section>
   )
}
