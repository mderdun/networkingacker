import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapIages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const dev = "production" === "development";

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
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/networkingacker",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
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
