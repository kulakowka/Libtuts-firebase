import m from 'mithril'
import helpers from '../../utils/helpers'

export default function About (data) {
  if (!data) return <p>loading...</p>

  let {
    _id,
    name,
    description,
    languages,
    homepage,
    repository,
    keywords
  } = data

  languages = []
  const url = helpers.projectUrl(_id)
  const shieldSrc = helpers.projectShieldUrl(_id)

  return (
    <div class='aboutProject'>
      <h1>{name}</h1>
      {description ? <p class='description'>{description}</p> : null}
      <section>
        <div class='shields'>
          <a href={url} config={m.route}>
            <img src={shieldSrc} alt='Tutorials'/>
          </a>
          {' '}
        </div>
        <dl class='meta'>
          <dt>Homepage:</dt>
          <dd>{homepage ? <a href={homepage}>{homepage}</a> : null}</dd>

          <dt>Repository:</dt>
          <dd>{repository ? <a href={repository}>{repository}</a> : null}</dd>

          <dt>Languages:</dt>
          <dd>
            {languages.map((language, index) => {
              return <span>{index ? ', ' : null}<a href={'/language/' + language.id}>{language.name}</a></span>
            })}
          </dd>

          <dt>Keywords:</dt>
          <dd>
            {keywords && keywords.map((keyword, index) => {
              return <span>{index ? ', ' : null}<a href={'/search?keywords=' + keyword}>{keyword}</a></span>
            })}
          </dd>
        </dl>
      </section>
    </div>
   )
}
