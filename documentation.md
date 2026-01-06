# Website Directory Structure Documentation

This is a Jekyll-based academic website hosted on GitHub Pages, forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/). This document provides a comprehensive overview of the directory structure and the purpose of each component.

## Overview

This website is built using Jekyll, a static site generator that transforms plain text into static websites. The site is configured to work with GitHub Pages and uses the Academic Pages template.

## Root Directory Files

### Configuration Files

- **`_config.yml`**: Main Jekyll configuration file containing site-wide settings including:
  - Site metadata (title, description, URL)
  - Author information and social media links
  - Collections definitions (teaching, publications)
  - Plugin configurations
  - Markdown processing settings
  - Default layouts for different content types

- **`_config.dev.yml`**: Development-specific configuration overrides

- **`Gemfile`**: Ruby dependencies specification for Jekyll and plugins

- **`package.json`**: Node.js dependencies (if any JavaScript tooling is used)

### Documentation Files

- **`README.md`**: Instructions for using and customizing the template
- **`CHANGELOG.md`**: Record of changes and updates to the template
- **`CONTRIBUTING.md`**: Guidelines for contributing to the project
- **`LICENSE`**: MIT License information

### Other Root Files

- **`.gitignore`**: Specifies files and directories Git should ignore
- **`talkmap.ipynb`**: Jupyter notebook for generating talk location maps
- **`talkmap.py`**: Python script version of the talkmap generator

## Directory Structure

### Content Directories

#### `_pages/`
Contains standalone pages that make up the main navigation of the website:

- **`about.md`**: About/homepage content
- **`cv.md`**: Curriculum Vitae page
- **`publications.md`**: Publications listing page
- **`research.md`**: Research overview page
- **`contact.md`**: Contact information page
- **`talks.html`**: Talks and presentations page
- **`talkmap.html`**: Geographic visualization of talks
- **`markdown.md`**: Markdown syntax examples/guide
- **`404.md`**: Custom 404 error page
- **`terms.md`**: Terms of service or usage

Archive pages:
- **`archive-layout-with-content.md`**
- **`category-archive.html`**
- **`collection-archive.html`**
- **`page-archive.html`**
- **`tag-archive.html`**
- **`year-archive.html`**
- **`non-menu-page.md`**: Example page not in main navigation

#### `_posts/`
Contains blog posts in markdown format. Posts follow Jekyll naming convention: `YYYY-MM-DD-title.md`

Current posts:
- `2012-08-14-blog-post-1.md`
- `2013-08-14-blog-post-2.md`
- `2014-08-14-blog-post-3.md`
- `2015-08-14-blog-post-4.md`
- `2199-01-01-future-post.md` (future-dated post)

#### `_talks/`
Contains talks and presentations in markdown format:

- `2012-03-01-talk-1.md`
- `2013-03-01-tutorial-1.md`
- `2014-02-01-talk-2.md`
- `2014-03-01-talk-3.md`

#### `_drafts/`
Contains draft posts that are not yet published:

- `post-draft.md`

### Layout and Design Directories

#### `_layouts/`
HTML templates that define the structure of different page types:

- **`default.html`**: Base layout for all pages
- **`single.html`**: Layout for single posts/pages
- **`archive.html`**: Layout for archive pages
- **`archive-taxonomy.html`**: Layout for category/tag archives
- **`splash.html`**: Full-width splash page layout
- **`talk.html`**: Layout specifically for talk pages
- **`compress.html`**: HTML compression wrapper

#### `_includes/`
Reusable HTML components that can be included in layouts:

**Main Components:**
- **`head.html`**: HTML head section with meta tags
- **`head/custom.html`**: Custom head additions
- **`masthead.html`**: Site header/navigation bar
- **`author-profile.html`**: Author bio sidebar
- **`seo.html`**: SEO meta tags
- **`scripts.html`**: JavaScript includes
- **`breadcrumbs.html`**: Breadcrumb navigation

**Archive Components:**
- **`archive-single.html`**: Single item in archive listings
- **`archive-single-cv.html`**: CV-style archive item
- **`archive-single-talk.html`**: Talk archive item
- **`archive-single-talk-cv.html`**: CV-style talk item

**Navigation and Lists:**
- **`nav_list`**: Navigation list generator
- **`post_pagination.html`**: Post pagination controls
- **`tag-list.html`**: List of tags
- **`category-list.html`**: List of categories

**Other Includes:**
- **`page__hero.html`**: Hero image/header component
- **`gallery`**: Image gallery component
- **`feature_row`**: Featured content row
- **`group-by-array`**: Array grouping utility
- **`base_path`**: Base path utility
- **`analytics-providers/custom.html`**: Custom analytics code

#### `_sass/`
Sass/SCSS stylesheets organized by component:

**Main Stylesheets:**
- **`_base.scss`**: Base styles and resets
- **`_reset.scss`**: CSS reset
- **`_variables.scss`**: Sass variables (colors, fonts, etc.)
- **`_mixins.scss`**: Reusable Sass mixins

**Component Styles:**
- **`_masthead.scss`**: Header styling
- **`_navigation.scss`**: Navigation styles
- **`_footer.scss`**: Footer styling
- **`_sidebar.scss`**: Sidebar styles
- **`_archive.scss`**: Archive page styles
- **`_page.scss`**: Page-specific styles
- **`_buttons.scss`**: Button styles
- **`_forms.scss`**: Form styling
- **`_tables.scss`**: Table styles
- **`_notices.scss`**: Notice/alert styles
- **`_syntax.scss`**: Code syntax highlighting
- **`_animations.scss`**: CSS animations
- **`_utilities.scss`**: Utility classes
- **`_print.scss`**: Print styles

**Vendor Styles (`_sass/vendor/`):**
- **`breakpoint/`**: Responsive breakpoint management
- **`font-awesome/`**: Icon font styles
- **`magnific-popup/`**: Lightbox/popup styles
- **`susy/`**: Grid system (legacy)

### Data and Assets

#### `_data/`
YAML data files for site configuration:

- **`navigation.yml`**: Navigation menu structure and links
- **`authors.yml`**: Author information for multi-author sites
- **`ui-text.yml`**: UI text strings for internationalization

**`_data/comments/`**: Static comments organized by post:
- `layout-comments/`
- `markup-syntax-highlighting/`
- `welcome-to-jekyll/`

#### `assets/`
Compiled assets directory:

- **`css/`**: Compiled CSS files
- **`js/`**: JavaScript files
- **`fonts/`**: Web fonts

#### `images/`
Image files for the website:

- Profile images: `Quadrada_original.jpg`, `bio-photo.jpg`, `bio-photo-2.jpg`, `profile.png`
- Content images: various PNG, JPG, and GIF files
- Favicon and touch icons: `browserconfig.xml`, `manifest.json`, various icon sizes

#### `files/`
Downloadable files served from the website:

- **`CV.pdf`**: PDF version of CV

### Utility and Generator Directories

#### `markdown_generator/`
Python scripts and Jupyter notebooks for generating markdown files from TSV data:

**Publications:**
- **`publications.py`**: Python script to generate publication pages
- **`publications.ipynb`**: Jupyter notebook version
- **`publications.tsv`**: TSV data file with publication information
- **`PubsFromBib.ipynb`**: Generate from BibTeX
- **`pubsFromBib.py`**: Python script version

**Talks:**
- **`talks.py`**: Python script to generate talk pages
- **`talks.ipynb`**: Jupyter notebook version
- **`talks.tsv`**: TSV data file with talk information

**Other:**
- **`readme.md`**: Usage instructions

#### `talkmap/`
Geographic visualization of talks/presentations:

- **`map.html`**: Interactive map HTML
- **`org-locations.js`**: Location data for map markers
- **`leaflet_dist/`**: Leaflet.js library files for mapping

### Special Directories

#### `.git/`
Git version control directory (standard Git repository data)

#### `.claude/`
Claude Code configuration directory:
- **`settings.local.json`**: Local settings for Claude Code

## Jekyll Collections

As defined in `_config.yml`, this site uses collections for organizing content:

1. **`teaching`**: Teaching-related content (output: true)
2. **`publications`**: Publication entries (output: true)

Note: The actual collection directories (`_teaching/`, `_publications/`) may not exist yet or may be generated.

## Content Management Workflow

### Adding New Content

1. **Blog Posts**: Create new markdown files in `_posts/` following the naming convention `YYYY-MM-DD-title.md`
2. **Pages**: Add new pages to `_pages/` and update `_data/navigation.yml` if needed
3. **Talks**: Add new talks to `_talks/` or use the markdown generator scripts
4. **Publications**: Add to `_publications/` or use the markdown generator scripts
5. **Files**: Upload PDFs and other downloads to `files/`
6. **Images**: Add images to `images/`

### Using Markdown Generators

The `markdown_generator/` directory contains tools to batch-generate content:

1. Edit the TSV files with your data
2. Run the Python scripts or Jupyter notebooks
3. Generated markdown files will be created in the appropriate collections

## Navigation Structure

The main navigation is defined in `_data/navigation.yml` and includes:

- Research
- Publications
- CV
- Contact

## Building and Deployment

### Local Development

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

### GitHub Pages Deployment

The site automatically builds and deploys when pushed to the master branch on GitHub.

## Key Configuration Points

### Site Information
Edit `_config.yml` to update:
- Site title and description
- Author name and bio
- Social media links
- Google Analytics ID

### Navigation
Edit `_data/navigation.yml` to modify the main menu

### Author Profile
Update the `author` section in `_config.yml`

### Styling
Customize colors and fonts in `_sass/_variables.scss`

## Important Notes

- The site uses kramdown for markdown processing
- Syntax highlighting is provided by Rouge
- Future-dated posts (like `2199-01-01-future-post.md`) won't appear until their date
- The `future: true` setting in `_config.yml` allows future-dated posts to be shown

## Resources

- Jekyll Documentation: https://jekyllrb.com/docs/
- Minimal Mistakes Theme: https://mmistakes.github.io/minimal-mistakes/
- Academic Pages: https://academicpages.github.io/
