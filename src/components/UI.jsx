import React from 'react';
import Loader from './Loader/Loader';

export default function UI() {
	return (
		<div>
			<h1>Заголовок 1</h1>
			<h2>Заголовок 2</h2>
			<h3>Заголовок 3</h3>
			<h4>Заголовок 4</h4>
			<h5>Заголовок 5</h5>
			<h6>Заголовок 6</h6>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque
				enim labore totam, numquam reprehenderit harum non hic quod. Provident
				voluptatem veniam voluptate quia asperiores commodi recusandae,
				voluptates doloremque praesentium.
			</p>
			<p>
				Далеко-далеко за словесными горами в стране гласных и согласных живут
				рыбные тексты. Моей, встретил осталось вопрос океана пустился раз не
				образ языком свое. Силуэт свое дорогу, вскоре проектах предложения
				предупреждал парадигматическая маленькая?
			</p>
			<h2>Buttons</h2>
			<button className="btn" type="button">
				Кнопка sm
			</button>{' '}
			<br />
			<button className="btn btn-md" type="button">
				Кнопка md
			</button>{' '}
			<br />
			<button className="btn btn-lg" type="button">
				Кнопка lg
			</button>{' '}
			<br />
			<button className="btn" type="button" disabled>
				Кнопка disabled
			</button>{' '}
			<br />
			<button className="btn btn-md btn-success" type="button">
				Кнопка success
			</button>{' '}
			<br />
			<h2>Link</h2>
			<a href="https://youtube.com">Ссылка</a>
			<h2>Unordered list</h2>
			<ul>
				<li> Lorem, ipsum dolor. </li>
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem, ipsum dolor.</li>
				<li>Далеко-далеко за словесными горами в стране.</li>
				<li>Lorem ipsum dolor sit.</li>
				<li>Lorem, ipsum dolor.</li>
			</ul>
			<h2>Ordered list</h2>
			<ol>
				<li> Lorem, ipsum dolor. </li>
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem, ipsum dolor.</li>
				<li>Далеко-далеко за словесными горами в стране.</li>
				<li>Lorem ipsum dolor sit.</li>
				<li>Lorem, ipsum dolor.</li>
			</ol>
			<Loader />
		</div>
	);
}
