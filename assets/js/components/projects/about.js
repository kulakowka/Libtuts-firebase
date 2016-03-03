import m from 'mithril'

export default function About (item) {
  const url = '/' + item.platform + '/' + item.name
  const shieldSrc = '/shield' + url + '.svg'

  return (
    <div class='aboutProject'>
      <h1>{item.name}</h1>
      {item.description ? <p class='description'>{item.description}</p> : null}
      <section>
        <div class='shields'>
          <a href={url} config={m.route}>
            <img src={shieldSrc} alt='Tutorials'/>
          </a>
          {' '}
          {item.platform === 'npm' ? (
            <a href={'https://www.npmjs.org/package/' + item.name}>
              <img src={'http://img.shields.io/npm/v/' + item.name + '.svg'} alt='NPM version'/>
            </a>
          ) : null}
        </div>
        <dl class='meta'>
          <dt>Homepage:</dt>
          <dd>{item.homepageUrl ? <a href={item.homepageUrl}>{item.homepageUrl}</a> : null}</dd>

          <dt>Repository:</dt>
          <dd>{item.repositoryUrl ? <a href={item.repositoryUrl}>{item.repositoryUrl}</a> : null}</dd>

          <dt>Registry:</dt>
          <dd>{item.packageManagerUrl ? <a href={item.packageManagerUrl}>{item.packageManagerUrl}</a> : null}</dd>

          <dt>Language:</dt>
          <dd>{item.language ? <a href={'/language/' + item.language}>{item.language}</a> : null}</dd>

          <dt>Platform:</dt>
          <dd>{item.platform ? <a href={'/' + item.platform}>{item.platform}</a> : null}</dd>

          <dt>Keywords:</dt>
          <dd>
            {item.keywords.map((keyword, index) => {
              return <span>{index ? ', ' : null}<a href={'/search?keywords=' + keyword}>{keyword}</a></span>
            })}
          </dd>
        </dl>
      </section>
    </div>
   )
}
