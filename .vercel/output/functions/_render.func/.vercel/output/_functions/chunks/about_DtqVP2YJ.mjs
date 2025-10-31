/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I’m a dedicated BSc. CSIT student who has built expertise by focusing on backend development. My passion for crafting efficient, scalable systems has driven me to deepen my understanding of core technologies and frameworks. Alongside this, I’m exploring AI/ML, experimenting with models and intelligent features to enhance web applications. Hardworking and eager to apply my skills, I’m actively seeking an internship where I can gain hands-on experience, contribute to impactful projects, and refine my abilities in backend development and AI integration.</p>";

				const frontmatter = {"title":"about","name":"Darshan Dhakal","designation":"Web Developer","location":"Inaruwa, Sunsari, Nepal","pronouns":"he/him","website":"http://tafutza.hn/kos"};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\nI’m a dedicated BSc. CSIT student who has built expertise by focusing on backend development. My passion for crafting efficient, scalable systems has driven me to deepen my understanding of core technologies and frameworks. Alongside this, I’m exploring AI/ML, experimenting with models and intelligent features to enhance web applications. Hardworking and eager to apply my skills, I’m actively seeking an internship where I can gain hands-on experience, contribute to impactful projects, and refine my abilities in backend development and AI integration.\r\n";
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

export { _page as _, compiledContent as c, frontmatter as f };
