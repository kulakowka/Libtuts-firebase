Нам надо будет сделать также:

1. Вот тут написано как правильно добавлять публикации пользователя в базу данных:
https://www.firebase.com/blog/2015-09-24-atomic-writes-and-more.html 
только мне надо через очереди это провернуть, 
так надо парсить маркдаун и делать это на клиенте возможно не лучшая затея.

2. Вот тут написано как правильно создавать пользователя с проверкой занятости никнейма:
https://www.firebase.com/docs/web/api/firebase/transaction.html
Тут вообще подробно про транзакции рассказывается.

3. Вот здесь подробнее про денормализацию:
https://www.firebase.com/blog/2015-10-07-how-to-keep-your-data-consistent.html
Они говорят что вообще не проблема хранить объект юзера чуть ли не со всеми полями в куче разных мест.
Чтобы построить таймлайн например они рекомендуют хранит экземпляр публикации в таймлайне каждого пользовтеля.
Но делать это все на клиенте - плохая затея. Лучше все делать через сервер очередей.

4. Сидилку можно переделать нахуй :) Она больше не нужна:
https://www.firebase.com/blog/2015-11-06-firebase-cli-data-commands.html

5. 



Вот как надо сделать синхронизированный массив и методы для добавления, удаления и тд.
Туда же можно и компутацию от мифрила добавить.
https://www.firebase.com/blog/2014-05-06-synchronized-arrays.html

Вот кстати и либа готовая есть:
https://github.com/katowulf/Firebase.getAsArray
на ее основе я и сделаю свою систему для работы с данными

или готовое для мифрила 
https://gist.github.com/webcss/e4aaa7d95342d107e1ce




а вот тут можно многому научиться
https://github.com/firebase/firefeed

https://gist.github.com/webcss









Возможно для продакшен сборки можно будет использовать:
http://mithril.js.org/optimizing-performance.html


Хорошая тема для регистрации кстати. 

Показываем форму для ввода email, и надпись типа "Введите email и мы вышлем вам приглашение".

Чувак вводит email, и нажимает кнопку "отправить"

Мы из его email генерим jwt токен, в который зашиваем email юзера и любую другую инфу.

На мыло отправляем письмо со ссылкой на страницу регистрации (в которой токен передается в GET параметре).

Таким образом, как только чувак перейдет по ссылке - мы будем точно знать что его email подтвержден. 
При этом нам не надо будет ничего в базу записывать, пока чувак не зарегается.

После клика на ссылку в письме - откроется страница регистрации, где в хидденфилде будет добавлен токен.
Он будет засабмичен на сервер, там распарсен и если email'ы совпадают, 
значит чувак регается на то самое мыло на которое мы отправляли ему приглашение.
А значит мыло подтверждено.

https://firebase-community.slack.com/invite/MjQzNDc2MDIwMjEtMTQ1NzA4Njc5MC01NWNlMTFkNGFh