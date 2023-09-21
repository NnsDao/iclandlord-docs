import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'IClandlord',
      social: {
        github: 'https://github.com/NnsDao/iclandlord-docs',
        twitter: 'https://twitter.com/IClandlord'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Play Guide Game', link: '/guides/play-guide-game/' },
            { label: 'FAQs', link: '/guides/faqs' }
          ]
        },
        {
          label: 'Whitepaper',
          autogenerate: { directory: 'whitepaper' }
        },
        {
          label: 'Resources',
          autogenerate: { directory: 'resources' }
        }
      ]
    })
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } }
});
