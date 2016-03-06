export default function About (data) {
  if (!data) return <p>loading...</p>

  const {name, homepage, about} = data

  return (
    <div class='aboutUser'>
      <h1>{name}</h1>
      {!about ? null : <p class='about'>{about}</p>}
      <section>
        <dl class='meta'>
          {!homepage ? null : [
            <dt>Homepage:</dt>,
            <dd>{homepage ? <a href={homepage}>{homepage}</a> : null}</dd>
          ]}
        </dl>
      </section>
    </div>
   )
}
