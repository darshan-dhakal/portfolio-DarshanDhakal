/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lugaa</p>";

				const frontmatter = {"title":"Lugaa","url":"https://github.com/darshan-dhakal/lugaa-clothing-ecommerce","tags":["TypeScript","React","React Router DOM","Tailwind CSS","Supabase","ESLint"],"date":2025};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/projects/lugaa.md";
				const url = "/projects/lugaa";
				function rawContent() {
					return "\r\nLugaa\r\n";
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
