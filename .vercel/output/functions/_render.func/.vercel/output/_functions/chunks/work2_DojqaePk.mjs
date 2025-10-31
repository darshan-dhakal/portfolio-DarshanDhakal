/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!-- ---\ntitle: Tactical Team Leader\ndate: 1985 - 1990\nurl: http://atawajof.dz/vonilzor\nlocation: Los Angeles, California\norg: Los Angeles County Sheriff's Department – SWAT Division\ntags:\n  [\n    \"SWAT\",\n    \"Surveillance\",\n    \"Undercover Operations\",\n    \"Evidence Gathering\",\n    \"Case Solving\",\n    \"Interviewing Skills\",\n  ]\n---\n\n- Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.\n- Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.\n- Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.\n- Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.\n- Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events. -->";

				const frontmatter = {};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "<!-- ---\r\ntitle: Tactical Team Leader\r\ndate: 1985 - 1990\r\nurl: http://atawajof.dz/vonilzor\r\nlocation: Los Angeles, California\r\norg: Los Angeles County Sheriff's Department – SWAT Division\r\ntags:\r\n  [\r\n    \"SWAT\",\r\n    \"Surveillance\",\r\n    \"Undercover Operations\",\r\n    \"Evidence Gathering\",\r\n    \"Case Solving\",\r\n    \"Interviewing Skills\",\r\n  ]\r\n---\r\n\r\n- Led SWAT operations in high-risk situations, including hostage rescues, armed standoffs, and counter-terrorism missions.\r\n- Developed and implemented tactical plans tailored to specific scenarios, ensuring the safety of hostages, civilians, and law enforcement personnel.\r\n- Conducted specialized training for SWAT team members in firearms proficiency, close-quarters combat, tactical movement, and hostage negotiation.\r\n- Coordinated with local, state, and federal agencies to support joint operations and enhance interagency cooperation.\r\n- Provided expertise and assistance in the planning and execution of high-profile security details for visiting dignitaries, VIPs, and major events. -->\r\n";
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
