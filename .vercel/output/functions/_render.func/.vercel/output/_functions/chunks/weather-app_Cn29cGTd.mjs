/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A Node.js-based web application built with Express.js and Handlebars that provides real-time weather information using an external API. It features dynamic routing, error handling, and user-friendly views. The app integrates the postman-request library to fetch weather data and demonstrates server-side rendering and basic RESTful architecture.</p>";

				const frontmatter = {"title":"Weather App","url":"https://github.com/darshan-dhakal/node-weather-website","tags":["Node.js","Express.js","HBS","Postman-Request","HTML","CSS"],"date":2024};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/projects/weather-app.md";
				const url = "/projects/weather-app";
				function rawContent() {
					return "\r\nA Node.js-based web application built with Express.js and Handlebars that provides real-time weather information using an external API. It features dynamic routing, error handling, and user-friendly views. The app integrates the postman-request library to fetch weather data and demonstrates server-side rendering and basic RESTful architecture.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
