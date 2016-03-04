import moment from 'moment'
import m from 'mithril'
import firebase from '../../utils/firebase'
import helpers from '../../utils/helpers'

const Tutorial = {
  controller (args) {
    let id = m.route.param('id')
    this.tutorial = m.prop()
    firebase.on('tutorials/' + id, 'value', (data) => this.tutorial(data.val()))
  },

  view (ctrl) {
    const tutorial = ctrl.tutorial()
    const editUrl = helpers.tutorialEditUrl(tutorial)

    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          <article class='tutorial'>
            <div class='edit'>
              <a class='btn' href={editUrl}>Edit tutorial</a>
            </div>
            <h1>{tutorial.title}</h1>
            {tutorial.contentHtml ? (
              <section>
                <div class='content cm-s-libtuts'>{tutorial.contentHtml}</div>
              </section>
            ) : null}
            <section>
              <dl class='meta'>
                <dt>Source URL:</dt>
                <dd>
                  <a href={tutorial.sourceUrl} target='_blank'>{tutorial.sourceUrl}</a>
                </dd>
                <dt>Domain:</dt>
                <dd>
                  <a href={'/domain/' + tutorial.sourceDomain}>{tutorial.sourceDomain}</a>
                </dd>
                <dt>Created at:</dt>
                <dd>{moment(tutorial.createdAt).fromNow()}</dd>
                <dt>Updated at:</dt>
                <dd>{moment(tutorial.updatedAt).fromNow()}</dd>
                <dt>Created by:</dt>
                <dd>
                  <a href={'/user/' + tutorial.creator}>{tutorial.creator}</a>
                </dd>
                <dt>Languages:</dt>
                <dd>
                  {tutorial.languages && tutorial.languages.map((language, index) => {
                    return <span>{index ? ', ' : null}<a href={'/language/' + language}>{language}</a></span>
                  })}
                </dd>
                <dt>Platforms:</dt>
                <dd>
                  {tutorial.platforms && tutorial.platforms.map((platform, index) => {
                    return <span>{index ? ', ' : null}<a href={'/' + platform}>{platform}</a></span>
                  })}
                </dd>
                <dt>Projects:</dt>
                <dd>
                  {tutorial.projects && tutorial.projects.map((project, index) => {
                    return <span>{index ? ', ' : null}<a href={'/' + project}>{project}</a></span>
                  })}
                </dd>
                <dt>Keywords:</dt>
                <dd>
                  {tutorial.keywords && tutorial.keywords.map((keyword, index) => {
                    return <span>{index ? ', ' : null}<a href={'/search?keywords=' + keyword}>{keyword}</a></span>
                  })}
                </dd>
              </dl>
            </section>
            <div id='comments'>
              <h2>Questions and discussion</h2>
              include ../comments/includes/form
              <br/>
              include ../comments/includes/list
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Tutorial
