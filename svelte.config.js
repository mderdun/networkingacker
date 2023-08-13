import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapIages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
			const html = escapeSvelte(highlighter.codeToHtml(code, lang));
			return `{@html \`${html}\`}`;
		}
	},
	remarkPlugins: [remarkUnwrapIages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
	customElements: [{ name: 'Highlighter', path: './src/components/pencilcase/Highlighter.svelte' }, { name: 'Quote', path: './src/components/pencilcase/Quote.svelte' }],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: async ({ request, resolve }) => {
				const response = await resolve(request);

				if (response.status === 404) {
				  // Redirect to the homepage
				  return {
					...response,
					status: 302,
					headers: {
					  ...response.headers,
					  location: '/',
					},
				  };
				}
		
				return response;
			  },
		},
	}
};

export default config;
