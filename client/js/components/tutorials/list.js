import Item from './item'

export default function Tutorials (list) {
  if (!list) return <p>loading...</p>

  return (
    <div class='tutorialsList'>
      {list.map(Item)}
    </div>
   )
}
