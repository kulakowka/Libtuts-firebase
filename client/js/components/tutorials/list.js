import Item from './item'

export default function Tutorials (list) {
  return (
    <div class='tutorialsList'>
      {list && list.map(Item)}
    </div>
   )
}
