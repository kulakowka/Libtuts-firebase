import m from 'mithril'
import moment from 'moment'
import helpers from '../../utils/helpers'

export default function Comment (data) {
  const {_id, contentHtml, author, createdAt, tutorial} = data
  return (
    <section class='commentItem' id={'comment_' + _id} key={_id}>
      <div class='meta'>
        <a class='creator' href={helpers.userUrl(author)}>{author}</a>
        {' '}
        <a href={helpers.commentUrl(tutorial, _id)}>{moment(createdAt).fromNow()}</a>
      </div>
      <div class='content cm-s-libtuts'>{m.trust(contentHtml)}</div>
    </section>
   )
}
