import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default {
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      cssModules: true,
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
};