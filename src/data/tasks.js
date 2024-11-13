export const tasks = [
  {
    id: '1_0',
    title: 'Сума двох чисел',
    htmlContent: '<p>Реалізувати програму, яка обчислює та повертає суму двох чисел(a, b).</p>',
    arg: 'a,b',
    execute: (myEqual, f) => {
      myEqual(f(0, 0), 0, "0 + 0");
      myEqual(f(2, 3), 5, "2 + 3");
      myEqual(f(-10, -45), -55, "-10 + -45");
    }
  },
  {
    id: 1_1,
    title: 'Високосний рік',
    htmlContent: `<p>На вхід функції подається число(year), яким задається рік. Завдання визначити, чи є рік високосним. Тобто
				повернути <i>true</i>, якщо рік високосний, та <i>false</i> в іншому випадку</p>
			<ul>
				<li>рік, номер якого кратний 400 - високосний;</li>
				<li>інші роки, номери яких кратні 100 - невисокосні;</li>
				<li>інші роки, номери яких кратні 4 - високосні.</li>
			</ul>
			<p><b><i>Примітка: </i></b>Потрібно задіяти логічні оператори, і не використовувати операції розгалуження!!!
			</p>`,
    arg: 'year',
    execute: (myEqual, f) => {
      myEqual(f(2000), true, "2000 - Високосний рік");
      myEqual(f(2020), true, "2020 - Високосний рік");
      myEqual(f(2008), true, "2008 - Високосний рік");
      myEqual(f(1904), true, "1904 - Високосний рік");
      myEqual(f(1600), true, "1600 - Високосний рік");
      myEqual(f(2023), false, "2023 - Невисокосний рік");
      myEqual(f(2025), false, "2025 - Невисокосний рік");
      myEqual(f(2100), false, "2100 - Невисокосний рік");
      myEqual(f(1900), false, "1900 - Невисокосний рік");
    }
  },
  {
    id: 1_2,
    title: 'Середнє з трьох',
    // url: 'https://example.com',
    htmlContent: `<p>Ви з Васею і Петром вирішили вибрати найкращі фотографії котиків в інтернеті. Для цього кожну фотографію
				кожен з вас оцінив за стобальною шкалою. Природно, тут же постало питання про те, як з трьох оцінок отримати
				одну фінальну. Ви побоюєтеся, що кожен з вас сильно завищить оцінку фотографіям свого котика. Тому було вирішено в
				якості фінальної оцінки брати не середнє арифметичне, а медіану, тобто просто відкинути максимальну і мінімальну оцінки.
				Вася почав писати код вибору середньої оцінки з трьох, але заплутався в if-ах, і тому передоручив це завдання вам.
				Спробуйте не просто вирішити задачу, а й мінімізувати кількість перевірок та максимально спростити умови перевірок.</p>`,
    arg: 'a, b, c',
    execute: (myEqual, f) => {
      myEqual(f(5, 0, 100), 5, 'correct Median(5, 0, 100)');
      myEqual(f(5, 0, 1), 1, 'correct Median(5, 0, 1)');
      myEqual(f(5, 20, 100), 20, 'correct Median(5, 20, 100)');
      myEqual(f(5, 20, 1), 5, 'correct Median(5, 20, 1)');
      myEqual(f(5, 20, 10), 10, 'correct Median(5, 20, 10)');
      myEqual(f(12, 12, 11), 12, 'correct Median(12, 12, 11)');
      myEqual(f(2, 3, 2), 2, 'correct Median(2, 3, 2)');
      myEqual(f(12, 3, 3), 3, 'correct Median(12, 3, 3)');
      myEqual(f(8, 8, 8), 8, 'correct Median(8, 8, 8)');
    }
  },
  {
    id: 1_3,
    title: 'Хід ферзя',
    // url: 'https://example.com',
    htmlContent: `<p>Вася вирішив навчити свого молодшого брата грати в шахи. Але ось біда, брат ще занадто малий і ніяк не
				може запам'ятати як ходить <a href="https://uk.wikipedia.org/wiki/%D0%A4%D0%B5%D1%80%D0%B7%D1%8C"
					target="_blank">ферзь</a>. Як справжній програміст, Вася вирішив автоматизувати ручну працю по навчанню початківців шахістів. Допоможіть йому
				написати програму, яка визначає чи є коректним хід ферзя. Координати вихідної (from) та кінцевої позиції (to) ходу передаються рядком у
				звичайній шаховій нотації, наприклад, "a1".</p>
			<p>Як завжди, постарайтеся вразити Васю красою і простотою отриманого коду!</p>
			<div><em>Примітка:</em> завдання буде легше виконати, якщо звернути увагу на наступні методи обробки
				рядків <a href="https://www.w3schools.com/jsref/jsref_charat.asp" target="_blank">charAt()</a> та <a
					href="https://www.w3schools.com/jsref/jsref_charcodeat.asp" target="_blank">charCodeAt()</a> </div>`,
    arg: 'from, to',
    execute: (myEqual, f) => {
      myEqual(f("a1", "d4"), true, 'correct move(a1, d4)');
      myEqual(f("f4", "e7"), false, 'incorrect move(f4, e7)');
      myEqual(f("a1", "a4"), true, 'correct move(a1, a4)');
      myEqual(f("c7", "c2"), true, 'correct move(c7, c2)');
      myEqual(f("g1", "d4"), true, 'correct move(g1, d4)');
      myEqual(f("a1", "a1"), false, 'incorrect move(a1, a1)');
    }
  },
  {
    id: 1_4,
    title: 'Перетворення числа на рядок',
    // url: 'https://example.com',
    htmlContent: `<p>Дано ціле число в діапазоні 20-99, що визначає вік (в роках). Вивести рядок-опис зазначеного віку,
				забезпечивши правильне узгодження числа зі словом «рік», наприклад:<br>
				20 - «двадцять років»,<br>
				32 - «тридцять два роки»,<br>
				41 - «сорок один рік».</p>
			<pre>
Приклад:
	Вхід: 55
	Вихід: п'ятдесят п'ять років
	</pre>`,
    arg: 'years',
    execute: (myEqual, f) => {
      myEqual(f(20), 'двадцять років', '20 - двадцять років');
      myEqual(f(32), 'тридцять два роки', '32 - тридцять два роки');
      myEqual(f(41), 'сорок один рік', '41 - сорок один рік');
      myEqual(f(55), "п'ятдесят п'ять років", "55 - п'ятдесят п'ять років");
    }
  },
  {
    id: 2_1,
    title: 'Решта',
    // url: 'https://example.com',
    htmlContent: `<p>Програма має розраховувати найменшу кількість монет, якою можна видати решту(change). Номінал монет 25¢, 10¢, 5¢
				та 1¢. Корисно використовувати жадібний алгоритм. Наприклад, якщо потрібно видати якомусь покупцю 41¢,
				найперший (тобто найкращий) крок, який можна зробити, це видати 25¢ (цей крок "найкращий", тому що він
				наближує нас до 0 швидше, ніж видача будь-якої іншої монетки.) Зауважте, що такий крок зменшить задачу з
				41¢ до задачі 16¢, адже 41 – 25 = 16. Задача ще не вирішена, але вже менша. Очевидно, що видача
				наступних 25¢ буде завеликою (якщо ми вважаємо, що касир не хоче втратити гроші), далі наступний крок з
				видача 10¢, зменшуючи здачу до 6¢. Далі видається одна 5¢ монетка, за якою слідує фінальний 1¢, на чому
				задача буде вирішеною. Таким чином покупець загалом отримає по одній монеті номіналом 25¢, 10¢, 5¢ та
				1¢.</p>
			<p>Як завжди, постарайтеся вразити красою і простотою отриманого коду!</p>`,
    arg: 'change',
    execute: (myEqual, f) => {
      myEqual(f(0.41), 4, 'Сума 0.41, монет 4 (25, 10, 5, 1)');
      myEqual(f(23), 92, 'Сума 23, монет 92');
      myEqual(f(1.6), 7, 'Сума 1.6, монет 7');
      myEqual(f(8.7), 36, 'Сума 8.7, монет 36');
      myEqual(f(4.2), 18, 'Сума 4.2, монет 18');
    }
  },

];



const pattern = {
  id: 1_2,
  title: '',
  // url: 'https://example.com',
  htmlContent: ``,
  arg: '',
  execute: (myEqual, f) => {

  }
}