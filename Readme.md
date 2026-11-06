# Personal Developer Profile

## What I built

I built a personal developer profile website using HTML only. It introduces me,
summarises the technologies I am learning, presents some practice projects,
describes my education and learning, and provides a contact form.

## Main sections

- **About Me:** A short introduction and an image with descriptive alternative text.
- **Skills and Technologies:** An unordered list of tools and concepts I am practising.
- **Projects:** Three project entries, each marked up as an article.
- **Education and Learning:** My academic background and current development learning.
- **Contact:** Contact information and a form with name, email, subject, and message fields.

## Semantic HTML choices

1. **`header`:** Holds the page heading, introduction tagline, and main navigation.
   These elements introduce the page and help visitors move around it.
2. **`nav`:** Groups the main navigation links. The `aria-label` identifies the
   purpose of this navigation landmark.
3. **`main`:** Contains the primary content of the page, separate from the header
   and footer.
4. **`section`:** Groups related content into identifiable topics such as About,
   Skills, Projects, Education, and Contact. Each section has a heading.
5. **`article`:** Marks each project as a self-contained entry that can be understood
   independently from the other projects.
6. **`figure` and `figcaption`:** Associate the profile-related image with its caption.
7. **`label`:** Explicitly associates each form control with its label using matching
   `for` and `id` values.

## Something confusing or interesting

One interesting part was understanding that semantic elements should describe the
purpose of content, not how the content should look. For example, a `nav` element
is appropriate for a group of navigation links, while a `section` groups content
around a particular topic.

## AI use

AI was used as a learning assistant to help plan the page structure, explain
semantic HTML, and review the accessibility of the markup.
