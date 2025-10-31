/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Luxury Hotel is a modern, full-stack web application built with Vite, React, TypeScript, and Tailwind CSS. It integrates UI components from ShadCN and Radix UI, with form handling via React Hook Form and Zod. The project also utilizes Supabase for backend services and TanStack Query for data fetching, offering a performant, theme-ready, and highly customizable development experience.</p>";

				const frontmatter = {"title":"Luxury Hotel","url":"https://github.com/darshan-dhakal/hotel-room-showcase","tags":["TypeScript","React","React Router DOM","Tailwind CSS","Supabase","ESLint"],"date":2025};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/projects/luxury-hotel.md";
				const url = "/projects/luxury-hotel";
				function rawContent() {
					return "\r\nLuxury Hotel is a modern, full-stack web application built with Vite, React, TypeScript, and Tailwind CSS. It integrates UI components from ShadCN and Radix UI, with form handling via React Hook Form and Zod. The project also utilizes Supabase for backend services and TanStack Query for data fetching, offering a performant, theme-ready, and highly customizable development experience.\r\n";
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
