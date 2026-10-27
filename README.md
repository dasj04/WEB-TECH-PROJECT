[README.md](https://github.com/user-attachments/files/34035296/README.md)
# Department of Information Technology --- Gauhati University

A front-end website prototype for the Department of Information
Technology at Gauhati University. It presents department information,
programmes and courses, faculty, vision and mission, contact details,
and selected department highlights through a multi-page website.

> **Academic project:** Developed as a four-member team for a Web
> Technology course.

## Features

-   **Home page:** Department introduction, quick links, achievement
    cards, notifications, and navigation.
-   **About page:** A dedicated page for department information.
-   **Courses and programmes:** Lists undergraduate, postgraduate,
    integrated, and research programmes, with links to programme
    structures or syllabi where provided.
-   **Programme search:** Client-side search/filtering of programme
    cards, with a Clear button.
-   **Faculty page:** A dedicated page for faculty information.
-   **Vision and mission:** A separate page for the department's vision
    and mission.
-   **Contact page:** Department contact details and a message link that
    opens the user's email application.
-   **Responsive layout and visual styling:** HTML pages styled with
    CSS, with JavaScript for selected interactions and scroll-based
    fade-in effects.

## Built With

-   **HTML5** --- page structure and content
-   **CSS3** --- layout, styling, and responsive presentation
-   **JavaScript** --- client-side interactions and programme filtering
-   **Google Fonts** --- typography on selected pages
-   **External icon assets** --- icons used on selected pages

## Pages

  File                    Purpose
  ----------------------- ----------------------------------
  `index.html`            Home page
  `about.html`            Department overview
  `courses.html`          Courses and programme catalogue
  `faculty.html`          Faculty information
  `vision_mission.html`   Vision and mission
  `contact.html`          Contact details and message link

## Getting Started

This is a static front-end project. No package manager or build step is
required.

1.  Clone the repository:

    ``` bash
    git clone https://github.com/dasj04/WEB-TECH-PROJECT.git
    ```

2.  Open the project folder:

    ``` bash
    cd WEB-TECH-PROJECT
    ```

3.  Open `index.html` in a modern web browser.

    You can also use the **Live Server** extension in Visual Studio Code
    to preview the website locally.

Some visual assets are loaded from external URLs, so an internet
connection may be needed for those assets to appear.

## Repository Structure

``` text
WEB-TECH-PROJECT/
├── courses/                 # Programme documents and syllabus files (if present)
├── elements/                # Images and visual assets
├── index.html               # Home page
├── styles.css               # Home page styles
├── about.html
├── about.css
├── courses.html
├── courses.css
├── faculty.html
├── faculty.css
├── vision_mission.html
├── vision_mission.css
├── contact.html
├── contact.css
├── script.js                # Home page interactions
├── dept.jpg
└── home.jpg
```

The repository may contain additional assets and page-specific scripts.
Refer to the files in the repository for the complete current structure.

## Team Contributions

The project was completed by four team members. The following is a
**proposed division of responsibilities** based on the pages and
features in the repository. Update the names and descriptions so they
accurately reflect each person's actual work before submitting or
presenting the project.

### 1. Jyotirmoy Das --- Courses and Programmes Page

-   Developed the courses and programmes page structure.
-   Organised programme information into research, postgraduate,
    undergraduate, integrated, and new-initiative sections.
-   Added programme details such as eligibility, admission information,
    duration, outcomes, and syllabus/programme-structure links where
    available.
-   Implemented client-side programme search and the Clear control.

### 2. Gyan Ankur Das --- Home Page and Navigation

-   Built the home page layout and department introduction.
-   Added quick links, achievement cards, notifications, and footer
    sections.
-   Connected the main navigation to the other website pages.
-   Added scroll-based fade-in behaviour for selected home-page
    elements.

### 3. Priyam Basistha --- Department Information and Faculty Pages

-   Developed the About and Faculty pages.
-   Organised department and faculty information into readable sections.
-   Styled the pages to align with the overall website design.

### 4. Baidurjya Bharadwaz --- Vision, Mission, Contact, and Styling Support

-   Developed the Vision and Mission page.
-   Built the Contact page with department contact details and a message
    link.
-   Created or refined page-specific CSS and assisted with consistency
    across pages.
-   Helped review navigation and presentation across the site.

**Important:** This is a suggested allocation, not a verified Git
contribution report. Keep the Jyotirmoy Das section only if it reflects
your actual contribution, and replace "Team Member 2--4" with your
teammates' names. If responsibilities were shared, describe them as
shared contributions rather than sole ownership.

## Known Limitations

-   The contact message button opens an email application; the project
    does not include a server-side contact form.
-   The home-page search currently displays an alert with the entered
    query rather than searching all site content.
-   Some images and fonts depend on external services.
-   Programme information and notification text are sample website
    content and should be verified against official department sources
    before being used as authoritative information.

## Future Improvements

-   Make the navigation and layout consistently responsive across all
    pages.
-   Implement site-wide search.
-   Add form validation and a backend service if a real contact form is
    required.
-   Verify and maintain programme details, notices, and contact
    information.
-   Add screenshots and a hosted demo link.

## Repository

[View the source code on
GitHub](https://github.com/dasj04/WEB-TECH-PROJECT)

------------------------------------------------------------------------

Made as a Web Technology academic team project.
