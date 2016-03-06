import moment from 'moment'
import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import helpers from '../../utils/helpers'
import Comments from '../../components/comments/list'

const Tutorial = {
  controller (args) {
    const id = m.route.param('id')
    const tutorialsRef = firebase.child('Tutorials/' + id)
    const commentsRef = firebase.child('Comments').orderByChild('tutorial').equalTo(id)

    let scope = firebaseMixin(m, this)

    scope.onLiveData(commentsRef, (data) => (scope.comments = data))
    scope.onData(tutorialsRef, (data) => (scope.tutorial = data))
  },

  view (ctrl) {
    if (!ctrl.tutorial) return <p>loading...</p>

    // console.log('comments', ctrl.comments)
    let {
      _id,
      title,
      contentHtml,
      sourceUrl,
      sourceDomain,
      createdAt,
      updatedAt,
      author,
      languages,
      projects,
      keywords
    } = ctrl.tutorial

    languages = helpers.toArray(languages)
    projects = helpers.toArray(projects)
    const editUrl = helpers.tutorialEditUrl(_id)

    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          <article class='tutorial'>
            <div class='edit'>
              <a class='btn' href={editUrl}>Edit tutorial</a>
            </div>
            <h1>{title}</h1>
            {contentHtml ? (
              <section>
                <div class='content cm-s-libtuts'>{m.trust(contentHtml)}</div>
              </section>
            ) : null}
            <section>
              <dl class='meta'>
                {!sourceUrl ? null : [
                  <dt>Source URL:</dt>,
                  <dd>
                    <a href={sourceUrl} target='_blank'>{sourceUrl}</a>
                  </dd>
                ]}

                {!sourceDomain ? null : [
                  <dt>Domain:</dt>,
                  <dd>
                    <a href={'/domain/' + sourceDomain}>{sourceDomain}</a>
                  </dd>
                ]}

                <dt>Created at:</dt>
                <dd>{moment(createdAt).fromNow()}</dd>

                <dt>Updated at:</dt>
                <dd>{moment(updatedAt).fromNow()}</dd>

                <dt>Created by:</dt>
                <dd>
                  <a href={'/user/' + author}>{author}</a>
                </dd>

                {!languages.length ? null : [
                  <dt>Languages:</dt>,
                  <dd>
                    {helpers.tagsByCommas(languages, (language, i) => <a href={helpers.languageUrl(language.key)} key={i}>{language.value}</a>)}
                  </dd>
                ]}

                {!projects.length ? null : [
                  <dt>Projects:</dt>,
                  <dd>
                    {helpers.tagsByCommas(projects, (project, i) => <a href={helpers.projectUrl(project.key)} key={i}>{project.value}</a>)}
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
            <div id='comments'>
              <h2>Questions and discussion</h2>
              include ../comments/includes/form
              <br/>
              {Comments(ctrl.comments)}
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Tutorial
