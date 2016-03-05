import m from 'mithril'
import moment from 'moment'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Tutorial (data) {
  const {_id, title, sourceUrl, author, createdAt, sourceDomain, commentsCount} = data
  const url = helpers.tutorialUrl(_id)

  return (
    <div class='tutorialItem' key={_id}>
      <h3>
        {sourceUrl ? (
          <a href={sourceUrl} target='_blank'>{title}</a>
        ) : (
          <a href={url} config={m.route}>{title}</a>
        )}
      </h3>
      <div class='meta'>
        <a href={url + '#comments'} config={m.route} title={numeral(commentsCount).format('0,0')}>{numeral(commentsCount).format('0a')} comments</a>
        <a href={'/user/' + author} config={m.route}>{author}</a>
        <a href={url} config={m.route}>{moment(createdAt).fromNow()}</a>
        {sourceDomain ? (
          <a href={'/domain/' + sourceDomain} config={m.route}>{sourceDomain}</a>
        ) : null}
      </div>
    </div>
   )
}
