/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!-- ---\ntitle: Senior Detective\ndate: 1990 - Present\nurl: http://ropibbe.nf/savadru\nlocation: Los Angeles, California\norg: Los Angeles Police Department (LAPD)\ntags: [\"Law Enforcement\", \"Police Work\", \"Tactical Operations\", \"Case Management\"]\n---\n\n- Lead investigations into organized crime, drug trafficking, and high-profile criminal activities.\n- Conducted extensive surveillance operations utilizing advanced equipment and techniques to gather critical intelligence.\n- Collaborated with federal agencies such as the FBI and DEA on joint task forces to dismantle criminal syndicates.\n- Played a pivotal role in numerous undercover operations, successfully infiltrating criminal organizations and gathering actionable evidence for prosecution.\n- Trained and mentored junior officers in surveillance tactics, undercover operations, and tactical maneuvers. -->";

				const frontmatter = {};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "<!-- ---\r\ntitle: Senior Detective\r\ndate: 1990 - Present\r\nurl: http://ropibbe.nf/savadru\r\nlocation: Los Angeles, California\r\norg: Los Angeles Police Department (LAPD)\r\ntags: [\"Law Enforcement\", \"Police Work\", \"Tactical Operations\", \"Case Management\"]\r\n---\r\n\r\n- Lead investigations into organized crime, drug trafficking, and high-profile criminal activities.\r\n- Conducted extensive surveillance operations utilizing advanced equipment and techniques to gather critical intelligence.\r\n- Collaborated with federal agencies such as the FBI and DEA on joint task forces to dismantle criminal syndicates.\r\n- Played a pivotal role in numerous undercover operations, successfully infiltrating criminal organizations and gathering actionable evidence for prosecution.\r\n- Trained and mentored junior officers in surveillance tactics, undercover operations, and tactical maneuvers. -->\r\n";
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
