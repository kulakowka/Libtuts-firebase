import m from 'mithril'
import moment from 'moment'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Tutorial (data) {
  const {
    _id,
    title,
    source,
    author,
    createdAt,
    domain,
    commentsCount
  } = data

  const url = helpers.tutorialUrl(_id)

  return (
    <div class='tutorialItem' key={_id}>
      <h3>
        {source ? (
          <a href={source} target='_blank'>{title}</a>
        ) : (
          <a href={url} config={m.route}>{title}</a>
        )}
      </h3>
      <div class='meta'>
        <a href={url + '#comments'} config={m.route} title={numeral(commentsCount).format('0,0')}>{numeral(commentsCount).format('0a')} comments</a>
        <a href={helpers.userUrl(author)} config={m.route}>{author}</a>
        <a href={url} config={m.route}>{moment(createdAt).fromNow()}</a>
        {!domain ? null : (
          <a href={helpers.domainUrl(domain)} config={m.route}>{domain}</a>
        )}
      </div>
    </div>
   )
}
