// CODE -BASICS (DIARY)

// Привет, Мир! 1/79
// Комментарии 2/79

// JavaScript Комментарии:
// - Однострочные комментарии(начинаются с //.);
// - Многострочные комментарии
// Многострочные комментарии начинаются с /* и заканчиваются на */.
// Между ними каждая строчка должна начинаться с символа *.

// Комментарий - текст в коде программы, который не влияет на функциональность и добавляется программистами для себя и своих коллег.

// Инструкции (Statements) 3/79

// Инструкция (statement) - команда для компьютера, написанная на языке программирования.
// Код на JavaScript — это набор инструкций, разделенных (чаще всего) символом ;.

// Инструкция — это единица исполнения.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements

// Интерпретатор - программа выполняющая код на JavaScript.
// (https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BF%D1%80%D0%B5%D1%82%D0%B0%D1%82%D0%BE%D1%80)

// Как мы проверяем ваши решения 4/79

// Тесты - специальный код, проверяющий программы на корректность, сверяя правильный результат с реальным.

// Синтаксические ошибки 5/79

// Синтаксическая ошибка - нарушение грамматических правил языка программирования.
// https://habr.com/ru/post/249525/

// console.log - функция печати

// Арифметические операции 6/79  и Операторы 7/79

// Операторы выполняют операции над определенными значениями, которые называются операндами.

// операнд(3) оператор(-)

// Унарная операция - операция с одним операндом. Например, -3 — унарная операция для получения числа, противоположного числу три.
// Бинарная операция - операция с двумя операндами. Например, 3 + 9.
// Операции, которые требуют наличия двух операндов, называются бинарными
// Операции (не операторы) бывают не только бинарными, но и унарными (с одним операндом),и даже тернарными (с тремя операндами)!
// Арифметическая операция - сложение, вычитание, умножение и деление.

// Кроме сложения, доступны следующие операции:
// * — умножение
// / — деление
// - — вычитание
// % — остаток от деления
// ** — возведение в степень

// Коммутативная операция 8/79

// Коммутативный закон - от перемены мест слагаемых сумма не меняется
// Коммутативность - свойство операции, когда изменение порядка операндов не влияет на результат.

// Композиция операций 9/79 Приоритет 10/79

// Ассоциативность
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Числа с плавающей точкой 11/79

// Что нужно знать про арифметику с плавающей запятой
// https://habr.com/ru/post/112953/

// NaN 13/79

// NaN - специальное значение "не число", которое обычно говорит о том, что была выполнена бессмысленная операция.
// Результатом любой операции, в которой участвует NaN, будет NaN.
// С точки зрения типов  NaN - это число
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN

// Конкретно в JavaScript самым распространенным стандартом является стандарт от AirBnb.
// https://github.com/airbnb/javascript

// Линтер 14/79

// В любом языке программирования существуют утилиты — так называемые
// линтеры. Они проверяют код на соответствие стандартам. В JavaScript это eslint.

// space-infix-ops – Отсутствие пробелов между оператором и операндами.
// no-mixed-operators – По стандарту нельзя писать код, в котором разные операции используются в одном выражении без явного разделения скобками.

// Кавычки 15/79

// Экранирование символов
// console.log("Dragon's mother said \"No\"");

// Шаблонные строки
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings

// Экранирующие последовательности 16/79

// Экранирующая последовательность - специальная комбинация символов в тексте. Например, \n — это перевод строки.
// \n — это пример экранирующей последовательности (escape sequence). Их ещё называют управляющими конструкциями.
// Кроме перевода строки, к таким символам относятся табуляция (разрыв, получаемый
//     при нажатии на кнопку Tab) и возврат каретки (только в Windows)

// фигурные скобки (${выражение}).

// Конкатенация 17/79

// Конкатенация - операция соединения двух строк. Например, console.log("King's " + ' Landing');

// Кодировка 18/79

// Кодировка - набор символов, закодированных с помощью чисел для представления текста в электронном виде.
// таблицы, в которых сопоставляются буквы и числа, называются кодировками.
// hello → 8 5 12 12 15
// 7 15 15 4 → good

// Что такое переменная 19/79 и Изменение переменной 20/79 и  Выбор имени переменной 21/79

// Переменная - способ сохранить информацию и дать ей имя для последующего использования в коде.

// именнование https://ru.hexlet.io/blog/posts/naming-errors-1
//              https://ru.hexlet.io/blog/posts/naming-in-programming

// Выражения в определениях 23/79

// // Любая переменная может быть частью любого выражения. В момент вычисления, вместо имени переменной подставляется её значение.
// Правила построения кода (грамматика языка) таковы, что в тех местах, где ожидается выражение, можно
// поставить любое вычисление (не только математическое, но и, например, строковое — как конкатенация),
// и программа останется работоспособной.

// Любая строка — выражение. Конкатенация строк — тоже выражение. Когда интерпретатор видит выражение,
// он обрабатывает его и генерирует результат — значение выражения. Вот несколько примеров выражений,
// а в комментариях справа от каждого выражения — итоговое значение:

// 62.5             // 62.5
// 50 * 1.25        // 62.5
// 120 / 10 * 2     // 24

// 'hello'          // "hello"
// 'Good' + 'will'  // "Goodwill"

// Переменные и конкатенация 24/79

// Именование переменных 25/79

// Подходы именования переменной:
// kebab-case — составные части переменной разделяются дефисом. Например: my-super-var.
// snakecase — для разделения используется подчеркивание. Например: `mysuper_var`.
// CamelCase — каждое слово в переменной пишется с заглавной буквы. Например: MySuperVar.
// lowerCamelCase — каждое слово в переменной пишется с заглавной буквы, кроме первого. Например: mySuperVar.

// Стандарт кодирования - Набор синтакстических и стилистических правил написания кода.

// Шаблонные строки
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings

// Интерполяция 28/79

// Интерполяция - способ соединения строк через вставку значений переменных в
// строку-шаблон с помощью фигурных скобок. Например, `Hi, ${name}!`.
// const firstName = 'Joffrey';
// const greeting = 'Hello';
// console.log(`${greeting}, ${firstName}!`);

// Бэктики ``
// Почти во всех языках интерполяция предпочтительнее конкатенации для объединения строк. Строка при
//  этом получается склеенная, и внутри неё хорошо просматриваются пробелы и другие символы. Во-первых, интерполяция
//   позволяет не путать строки с числами (из-за знака +), а во-вторых, так гораздо проще (после некоторой практики)
//   понимать строку целиком.

// Извлечение символов из строки 29/79

// Цифра называется индексом — позицией символа внутри строки
// Индексы начинаются с 0
// Индекс последнего элемента равен длине строки минус единица:
// Обращение по несуществующему индексу вернет значение undefined.

// Типы данных 30/79 и undefined 31/79 и Неизменяемость примитивных типов 32/79

// NaN возникает там, где вместе используются несовместимые значения. Например - это число и строка.

// Литерал – запись фиксированного значения в исходном коде программы.

// JavaScript позволяет узнать тип данных с помощью оператора typeof

// Типы данных Number, BigInt и String — это примитивные типы, они встроены в сам язык.
// Кроме того, в JavaScript встроены также и некоторые составные типы данных, например, массивы или объекты.

// Тип данных - множество данных в коде (разновидность информации). Тип определяет, что можно делать с элементами конкретного множества.
// Например, целые числа, рациональные числа, строки — это разные типы данных.

// Примитивные типы данных - простые типы, встроенные в сам язык программирования.

// Неизменяемость примитивных типов важна по многим причинам, ключевая — производительность.
// JavaScript — язык не дает никакой физической возможности поменять строку.

// Примитивные типы в JavaScript поменять нельзя , а заменить значение переменной — без проблем.

// const one = "Naharis";
// const two = "Mormont";
// const three = "Sand";

// // BEGIN
// console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);

// Слабая типизация 33/79

// JavaScript — это язык со слабой типизацией.
// Он знает о существовании разных типов (числа, строки и др.), но относится к их
// использованию не очень строго, пытаясь преобразовывать информацию, когда это кажется разумным.

// В языках со строгой типизацией сложить число со строкой не получится.

// JavaScript был создан для интернета, а в интернете вся информация — это строки.
// Даже когда вы вводите на сайте номер телефона или год рождения, на сервер эта информация
// поступает не как числа, а как строки. Поэтому авторы языка решили, что автоматически преобразовывать типы — правильно и удобно.

// Для выражения любой произвольной операции в программировании существует понятие функция. Функции бывают как встроенные,
// так и добавленные программистом. С одной встроенной функцией мы уже знакомы, это log() в вызове console.log().

// Функции — одна из ключевых конструкций в программировании, без них невозможно сделать практически ничего.

// const result = reverse('Hello!');
// Запись reverse('Hello!') означает, что вызывается функция с именем reverse, в которую был передан аргумент (или параметр) 'Hello!'.
// Аргументы нужны функциям для работы так же, как операторам нужны операнды.

// Функция - операция, способная принимать данные и возвращать результат; функция вызывается так: foo().
// Аргумент - информация, которую функция получает при вызове. Например, foo(42) — передача аргумента 42 функции foo()

// Math.pow(2, 3); // 8
// Что такое Math? Технически — это объект, доступный из любого места программы
// Функция Math.pow() (напомним, что функция здесь pow(), а Math - объект

// Откуда мы знаем, сколько каких параметров нужно функции Math.pow() и какого типа будет «возврат»?
//  Мы заглянули в сигнатуру этой функции. Сигнатура определяет входные параметры и их типы, а также выходной параметр и его тип.

//  Сигнатура функции - формальное описание типов аргументов и типа возвращаемого значения функции.

//  Аргумент по умолчанию - необязательный аргумент функции.

//  JavaScript: Вызов функции — выражение
//  Выражение — это код, который при выполнении программы вычисляется в значение.
//  Какие из этих фрагментов кода являются выражениями?

// 42
// 10 * 45
// 'Kings ' + 'road'
// calculateDistance('Lannisport', 'Bayasabhad')
// Числа и математические операции — наверное, самые простые варианты. Выражение 42 вычислится
// в значение 42, выражение 10 * 45 — в значение 450.
// Конкатенация строк — тоже выражение, которое вычислится в соответствующее значение (новую строку).
// функция «возвращает» значение.

// Всё, что работает как выражение, может быть использовано в других выражениях,
// а также во всех местах, где на вход ожидаются выражения.

// выражения вычисляются в значения.
// То есть с точки зрения JavaScript, значения и выражения — это что-то схожее. Поэтому любые значения
//  в программе технически можно заменить выражениями.

// JavaScript, как и большинство традиционных языков, является языком с жадными вычислениями
// (в других языках бывают ленивые вычисления). JavaScript пытается вычислить сначала максимально
// глубокий уровень вызова, затем менее глубокий, и так двигается снизу вверх пока не вычислит всё.

// Детерминированность функции - Для одного и того же входа, всегда один и тот же выход

// 43/79:JavaScript: Побочные эффекты
// console.log() выводит что-то на экран, но это не возврат значения —
// это просто какое-то действие, которое выполняет функция.

// С точки зрения программы вывод на экран — это так называемый побочный эффект. Побочным эффектом называют действия,
//  которые взаимодействуют с внешним окружением (средой выполнения).

// Побочный эффект - действие, которое изменяет внешнее окружение (среду выполнения). Например, вывод на экран или отправка письма.
// Чистые функции - Детерминированные функции без побочных эффектов

// 44/79

// JavaScript: Стандартная библиотека\

// Вот некоторые советы, как узнавать о новых функциях:

// Всегда чётко отслеживайте, с чем вы сейчас работаете (какой тип данных). Почти всегда вы найдете необходимую функцию в соответствующем разделе документации — например, для работы со строками нужно изучать строковые функции.
// Периодически открывайте раздел со стандартными функциями по изучаемой тематике и просто пробегайтесь по ним, изучая сигнатуры и способы использования.
// Чаще читайте чужой код, особенно код библиотек, которые вы используете. Он весь доступен на GitHub.

// Стандартная библиотека - набор полезных функций, входящий в комплект поставки языка программирования.

// Свойства 45/79

// В JavaScript свойства встроены прямо в язык. Они указываются через точку сразу после переменной (или константы)
// Данные, которыми мы оперируем в своих программах, могут обладать важными свойствами — например, у строк есть длина.

// Методы 46/79

// Кроме свойств, у данных существуют методы — функции, находящиеся внутри свойств.
// С практической точки зрения это значит, что метод работает и вызывается как функция, но делает это как свойство, через точку.

// свойства https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number

// Методы есть не у самих чисел, а у данных (объектов) типа Number.
// Числа, записанные в переменные или константы, автоматически преобразуются к данному типу во
// время обращения к ним, в это время происходит так называемый boxing.

// Неизменяемость 47/79

// Что напечатает на экран последний вызов?

// const name = 'Tirion';
// console.log(name.toUpperCase()); // => TIRION
// console.log(name); // => ?
// Ответ на этот вопрос зависит от того, как вы поняли урок про неизменяемость примитивных типов данных.
// Вызов метода .toUpperCase() возвращает новое значение, в котором все буквы преобразованы в верхний регистр,
// но он не меняет (и не может этого сделать) исходную строку. Поэтому внутри константы (или переменной — это не важно)
// окажется старое значение: 'Tirion'. Эта логика справедлива для методов всех примитивных типов. Более того, попытка
// изменить значение свойства этих данных ни к чему не приведет

// Свойства и методы как выражения 48/79

// Свойства и методы — такие же выражения, как переменные, константы или вызовы функции, а значит, их можно всячески комбинировать.

// const text = 'Never forget what you are, for surely the world will not';
// console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);

// Цепочка вызовов 49/79

// const tir = "Tirion";
// console.log(tir.length.toString());

// const name = 'Tirion';
// console.log(name.toUpperCase().toLowerCase());
// Подобный код требует небольших умственных усилий. Важно понимать, что .toLowerCase() применяется к результату
//  вызова функции, которая находится левее. А функция toUpperCase() возвращает строку. Новички часто делают ошибки
//   в цепочках с методами, забывая ставить вызов:

// const name = 'Tirion';
// // Этот код отработает неверно!
// console.log(name.toUpperCase.toLowerCase());

// Создание (определение) функции 50/79

// Определение функции состоит из двух частей:

// Присваивание функции константе
// Непосредственно определение функции

// Само по себе определение функции - это всё, что находится после присвоения:

// () => {
//   const text = 'Today is: December 5';
//   console.log(text);
// };

// В отличие от обычных данных, функции выполняют действия, поэтому их имена практически всегда должны
// быть глаголами: «построить что-то», «нарисовать что-то», «открыть что-то».

// Передача одного аргумента 51/79

// Технически, параметры функции всегда являются переменными, а не константами. Но лучше относиться к ним как к константам.

// const showCurrentDay = (text) => {
//     console.log(`Today is: ${text}`);
//   };

//   showCurrentDay('January 29');

// Today is: January 29

// Заметьте: мы не определяем переменную text, но используем её в теле функции.
// JavaScript работает так: переменная сама создаётся при вызове, и
//  указанное значение (в нашем примере — 'January 29') записывается в эту переменную.

// const showCurrentDate = ('Today is: December 5') => {
//     // какой-нибудь код
//   };
//   Запустить такой код не получится — он содержит синтаксическую ошибку. Вместо переменной в аргументе написана строка, то есть значение.

// Аргумент должен быть переменной, иначе он не сможет быть аргументом, то есть чем-то, что принимает значение при вызове.

// Передача нескольких аргументов 52/79

// Главное — помнить, в каком порядке аргументы стоят при определении функции, в таком же порядке они должны передаваться при вызове.
// Аргументы можно и не передавать, или передать только часть, тогда значением непереданных аргументов станет undefined.

// Возврат значений 53/79

// Обратите внимание: мы знаем, что вызов функции — выражение, поэтому мы передали вызов одной
// функции в вызов другой функции — console.log(sub(2018, 1975)).

// Возврат по умолчанию 54/79

//  Вызов функции – выражение, а выражения всегда возвращают результат своего выполнения.
// return без выражения нередко используют для прерывания вычислений

// Параметры по умолчанию 55/79

// Аргументов по умолчанию может быть любое количество, но все они должны быть в конце
// списка аргументов. То есть такие строчки кода синтаксически некорректны:

// const getParentFor = (childName = 'Jon', who) => {
// const calculate = (a, b = 90, c) => {
// const getPrices = (code = 4161, quantity, place) => {

// Именование 56/79

// Функция — действие, вызов функции всегда подобен указанию «сходи», «возьми», «напечатай», «положи» и так далее. Вспомните, какие функции были в предыдущих уроках:

// showDate() («показать дату»)
// sub() (subtract — «вычесть»)
// round() («округлить»)
// getMoney() («получить»)
// Переменная/Константа — сущность, поэтому мы используем существительные:

// child
// result
// euros

// Берите на вооружение следующую структуру: функция — глагол, переменная/константа — существительное.

// let cardNumber = prompt("Введите номер карты");

// const getHiddenCard = (cardNumber, starsCount = 4) => {
//   const visibleDigits = cardNumber.slice(12);
//   return visibleDigits.padStart(starsCount + 4, "*");
// };

// console.log(getHiddenCard(cardNumber));

// Упрощенный синтаксис функций 57/79

// const square = (x) => {
//   return x ** 2;
// };

// const double = (x) => x ** 2;

// Реализуйте функцию capitalize(), которая приводит первую букву переданного слова к верхнему регистру:
// const name = 'arya';
// console.log(capitalize(name)); // => Arya
// const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

// Логический тип 58/79
// Логический тип (bool) - тип данных с двумя возможными значениями: true (истина) и false (ложь).

// Предикаты 59/79
// Функции-предикаты (или функции-вопросы) отвечают на какой-то вопрос и всегда (без исключений!) возвращают либо true, либо false.
// JavaScript предикаты, как правило, начинаются с префикса is, has или can, но не ограничены этими словами. Примеры:

// isInfant() — «младенец ли?»
// hasChildren() — «есть ли дети?»
// isEmpty() — «пустой ли?»
// hasErrors() — «есть ли ошибки?»
// Функция может считаться предикатом только если она возвращает bool.
// Предикат - выражение, отвечающее на вопрос «да» или «нет» с помощью типа bool.

// Комбинирование операций и функций 60/79
// Логические операции — это выражения. Значит, логические операции можно комбинировать с другими выражениями.

// Логические операторы 61/79
// Логические операторы - операторы «И» (&&), ИЛИ (||), позволяющие создавать составные логические условия.

// Отрицание 62/79

// Логические операторы 2 63/79

// Слабая типизация 64/79
// JavaScript — это язык со слабой типизацией. Он знает о существовании разных типов (числа, строки и др.), но относится к
// их использованию не очень строго, пытаясь преобразовывать информацию, когда это кажется ему разумным.

// В JavaScript есть два простых правила, по которым происходят преобразования:

// 0, '', undefined, NaN, null приводятся к false. Эти значения называют falsy.
// Всё остальное приводится к true

// let text = "Hexlet";
// const getLetter = (text, number) => {
//   const result = text[number - 1] || "";
//   return result;
// };

// console.log(getLetter(text, 6));

// Условная конструкция (if) 65/79

// if - конструкция языка, управляющая порядком выполнения инструкций. В скобках ей передается выражение-предикат,
// а затем описывается блок кода в фигурных скобках. Этот блок кода будет выполнен, только если предикат — истина.

// else 66/79 пывар

// else - способ задать блок кода, который будет выполнен, если условие с if не удовлетворено

// else if 67/79

// else if - способ задать несколько альтернативных условий.

// Тернарный оператор 68/79

// if — это инструкция, а не выражение.

// const abs = (number) => {
//     return number >= 0 ? number : -number;

/* <predicate> ? <expression on true> : <expression on false>. */

//     Тернарный оператор - Способ превратить простую условную инструкцию в выражение, например, number >= 0 ? number : -number.
//   }

// Switch 69/79

// Инструкция switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.

// Свитч — довольно сложная конструкция с точки зрения количества элементов, из которых она состоит:

// Внешнее описание, в которое входит ключевое слово switch. Переменная, по значениям которой
// switch будет выбирать поведение. И фигурные скобки для вариантов выбора.
// Конструкции case и default, внутри которых описывается поведение для разных значений рассматриваемой переменной. Каждый case соответствует
// if в примере выше. default - это особая ситуация, соответствующая ветке
// else в условных конструкциях. Как else, указывать default не обязательно (но линтер всегда его просит).
// break нужен для предотвращения «проваливания». Если его не указать, то после выполнения
//  нужного case выполнение перейдет к следующему case, и так либо до ближайшего break, либо до конца switch.

// Цикл While 70/79

// Цикл While - инструкция для повторения кода, пока удовлетворяется какое-то условие.

// while. Он состоит из трёх элементов:

// Ключевое слово while. Несмотря на схожесть с вызовом функций, это не вызов функции.
// Предикат. Условие, которое указывается в скобках после while. Это условие вычисляется на каждой итерации.
// Тело цикла. Блок кода в фигурных скобках. Этот блок аналогичен блоку кода в функциях.
//  Всё, что определено внутри этого блока (константы или переменные), видно только внутри этого блока.

// const printNumbers = (num) => {
//   let i = num;
//   while (i > 0) {
//     console.log(i);
//     i = i - 1;
//   }
//   console.log("finished!");
// };

// printNumbers(4);

// Агрегация данных (Числа) 71/79

// Отдельный класс задач, который не может обойтись без циклов, называется агрегированием данных. К таким
// задачам относятся поиск максимального, минимального, суммы, среднего арифметического и т.п.
// Их главная особенность в том, что результат зависит от всего набора данных. Для рассчета суммы
// нужно сложить все числа, для вычисления максимального нужно сравнить все числа.

// Агрегация данных (Строки) 72/79

// Агрегация применяется не только к числам, но и к строкам. Это такие задачи, в которых строка формируется
// динамически, то есть заранее неизвестно, какого она размера и что будет содержать.

// const repeat = (text, times) => {
// Нейтральный элемент для строк – пустая строка
//   let result = "";
//   let i = 1;

//   while (i <= times) {
// Каждый раз добавляем строку к результату
//     result += `${text}`;
//     i = i + 1;
//   }

//   return result;
// };

// console.log(repeat("Ra", 5));

// Условия внутри тела цикла 74/79

// const countChars = (str, char) => {
//   let i = 0;
//   let count = 0;
//   while (i < str.length) {
//     if (str[i] === char) {
//       // Считаем только подходящие символы
//       count = count + 1;
//     }
//     // Счетчик увеличивается в любом случае
//     i = i + 1;
//   }

//   return count;
// };

// console.log(countChars("Rrarararrararararrara", "a"));

// Формирование строк в циклах 75/79

// const reverse = (str) => {
//   let i = str.length - 1;
//   let result = "";
//   while (i >= 0) {
//     result = `${result}${str[i]}`;
//     console.log(result);
//     i = i - 1;
//   }

//   return result;
// };

// console.log(reverse("ra"));

// Синтаксический сахар 76/79

// const filterString = (str, char) => {
//   let i = 0;
//   let result = "";
//   while (i < str.length) {
//     const currentChar = str[i];
//     if (currentChar !== char) {
//       result = `${result}${currentChar}`;
//     }
//     i += 1;
//   }

//   return result;
// };

// console.log(filterString("rararararara", "a"));

// Инкремент и декремент 77/79

// В отличие от всех остальных операций, которые не имеют побочных эффектов и просто возвращают новое значение
// , инкремент и декремент не только возвращают значение, но и изменяют значение переменной.

// При использовании префиксной нотации сначала происходит изменение переменной, а потом возврат.
// При использовании постфиксной нотации — наоборот: сначала возврат, а потом изменение переменной.

// let x = 5;

// console.log(++x); // => 6
// console.log(x);   // => 6

// console.log(x++); // => 6
// console.log(x);   // => 7

// Рекомендации по использованию:

// Никогда не мешайте в рамках одного выражения операции/функции без побочных эффектов
// с операциями/функциями, обладающими побочными эффектами.
// Используйте инкремент и декремент только там, где нет разницы между префиксным и постфиксным вариантом:
// отдельно от всего, на своей собственной строчке кода.

// const makeItFunny = (str, n) => {
//   let i = 0;
//   let result = "";
//   while (i < str.length) {
//     if ((i + 1) % n === 0) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//     ++i;
//   }
//   return result;
// };

// console.log(makeItFunny("I NevEr LooK bAck", 4));

// Возврат из циклов 78/79

// Работа с циклами обычно сводится к двум сценариям:

// Агрегация. Накопление результата во время итераций и работа с ним после цикла. Переворот строки как раз относится к такому варианту.
// Выполнение цикла до достижения необходимого результата и выход. Например, задача поиска простых чисел.
// Напомним, что простое число — это число, которое делится без остатка только на себя и на единицу.
