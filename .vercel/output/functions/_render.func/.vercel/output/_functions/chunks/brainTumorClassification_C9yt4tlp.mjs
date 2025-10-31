/* empty css                         */
import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_2hffKGUr.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As a final year project, I collaborated to build an intelligent brain tumor detection system using Convolutional Neural Networks (CNN) and transfer learning with VGG16. Trained on 7,000+ MRI images (glioma, meningioma, pituitary, and no tumor), the model performs high-accuracy classification with advanced preprocessing like data augmentation, skull stripping, and RGB conversion.\r\nWe fine-tuned VGG16, added Dense, Dropout, and Softmax layers, and evaluated performance using accuracy, recall, precision, and confusion matrix. Designed for real-world use, the system integrates with a MERN-based web interface, delivering structured outputs and over 95% classification accuracy.</p>";

				const frontmatter = {"title":"Brain Tumor Classification using Deep Learning (CNN and VGG16)","url":"https://brain-tumor-classification-deeplear-black.vercel.app/","tags":["Deep Learning","CNN","VGG16","TensorFlow & Keras","MERN Stack","Python"],"date":2025};
				const file = "D:/portfolio/portfolio-DarshanDhakal/src/pages/projects/brainTumorClassification.md";
				const url = "/projects/brainTumorClassification";
				function rawContent() {
					return "\r\nAs a final year project, I collaborated to build an intelligent brain tumor detection system using Convolutional Neural Networks (CNN) and transfer learning with VGG16. Trained on 7,000+ MRI images (glioma, meningioma, pituitary, and no tumor), the model performs high-accuracy classification with advanced preprocessing like data augmentation, skull stripping, and RGB conversion.\r\nWe fine-tuned VGG16, added Dense, Dropout, and Softmax layers, and evaluated performance using accuracy, recall, precision, and confusion matrix. Designed for real-world use, the system integrates with a MERN-based web interface, delivering structured outputs and over 95% classification accuracy.\r\n";
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
