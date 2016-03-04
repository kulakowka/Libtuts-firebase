import m from 'mithril'
import moment from 'moment'
import numeral from 'numeral'
import helpers from '../../utils/helpers'

export default function Tutorial (item) {
  const url = helpers.tutorialUrl(item)

  return (
    <div class='tutorialItem' key={item.id}>
      <h3>
        {item.sourceUrl ? (
          <a href={item.sourceUrl} target='_blank'>{item.title}</a>
        ) : (
          <a href={url} config={m.route}>{item.title}</a>
        )}
      </h3>
      <div class='meta'>
        <a href={url + '#comments'} config={m.route} title={numeral(item.commentsCount).format('0,0')}>{numeral(item.commentsCount).format('0a')} comments</a>
        <a href={'/user/' + item.creator} config={m.route}>{item.creator}</a>
        <a href={url} config={m.route}>{moment(item.createdAt).fromNow()}</a>
        {item.sourceDomain ? (
          <a href={'/domain/' + item.sourceDomain} config={m.route}>{item.sourceDomain}</a>
        ) : null}
      </div>
    </div>
   )
}
