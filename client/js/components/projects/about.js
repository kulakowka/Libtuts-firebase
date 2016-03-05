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

  languages = helpers.toArray(languages)
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
          {!homepage ? null : [
            <dt>Homepage:</dt>,
            <dd>{homepage ? <a href={homepage}>{homepage}</a> : null}</dd>
          ]}

          {!repository ? null : [
            <dt>Repository:</dt>,
            <dd>{repository ? <a href={repository}>{repository}</a> : null}</dd>
          ]}

          {!languages.length ? null : [
            <dt>Languages:</dt>,
            <dd>
              {helpers.tagsByCommas(languages, (language, i) => <a href={helpers.languageUrl(language.key)} key={i}>{language.value}</a>)}
            </dd>
          ]}

          {!keywords.length ? null : [
            <dt>Keywords:</dt>,
            <dd>
              {helpers.tagsByCommas(keywords, (keyword, i) => <a href={helpers.keywordUrl(keyword)} key={i}>{keyword}</a>)}
            </dd>
          ]}
        </dl>
      </section>
    </div>
   )
}
