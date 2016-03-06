import Item from './item'

export default function Projects (list) {
  return (
    <section class='projectsGrid'>
      {list ? list.map(Item) : <p>loading...</p>}
    </section>
   )
}
