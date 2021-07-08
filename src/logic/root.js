/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ROOT  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Main entry point for client-side JavaScript, bundled as IIFE.      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

// DEPENDENCIES

// modules
import { smooth } from 'modules/scroll';
import { updateTime } from 'modules/days';

// components
import header from 'headers/1/_';
import nav from 'navigation/1/_';
import footer from 'footers/1/_';

// EXECUTION
document.addEventListener('DOMContentLoaded', () => {
    nav();
    smooth();
    header();
    footer();
    updateTime();
});
