# GOAL

The goal of this project is to replicate the functionality and design of the Nike.com website as closely as possible. This involves recreating the layout, features, and user experience of the original website.

# Project Objective

1. Develop a simplified version of the Nike website, focusing on key elements such as the header, navigation menu, and footer.
2. Ensure basic responsiveness for the demo homepage to showcase adaptability across different screen sizes.
3. Include dummy content and images to simulate the appearance of a live website.
4. Implement clickable links to additional functions (e.g., Pick-up, Dropdown menu, Filter items.) for demonstration purposes.

# Task

1. Research and analyze the structure and functionality of the Nike.
2. Plan and design the layout of the cloned homepage with simplicity in mind.
3. Develop frontend components using HTML, CSS, and JavaScript, focusing on essential features.
4. Implement basic functionality using ECMAScript programming language and Tailwind framework.
5. Test and debug to ensure the website pages work correctly and consistently.
6. Document the development process, including code comments and Convention Guides.
7. Prepare a presentation and demonstration of the cloned website pages for School Portfolio.

# Website-Pages

1. **Main Pages:**
   - Home Page:
   - New & Featured:
   - Men Page:
   - Women Page:
   - Kids Page:
   - Nike Member Page:
2. Components:
   - Header section
   - Navigation section
   - Footer section
   - Footer Responsive section
   - Footer Bottom section
   - AutoSlider Image

# Folder Structure

- Image of folder structure :
  ![Screenshot_2024-05-27_at_6.51.28_in_the_evening](/uploads/0e494dfcceab408819e2a984082749b0/Screenshot_2024-05-27_at_6.51.28_in_the_evening.png)

1. **Src (folder)**:
   - This is the main container directory for organizing all project resources.
   - **Images**: Contains various images used throughout the website, such as product photos, logos, or background images.
   - **Pages**: Holds HTML files or templates that represent different sections or pages of the website, organized into subdirectories like **`Home`**, **`New & Feature`**, **`Men`**, **`Women`**, **`Kids`**, **`Nike Membership`**, and **`Find a Store`**. This structure helps in managing and navigating through different parts of the site.
   - **Script**: Includes JavaScript files responsible for different functionalities or components on the website. Files like **`Carousel.js`**, **`Banner.js`**, **`autoslider.js`**, and **`Find.js`** are stored here, promoting modular code organization and maintenance.
   - **Style**: Contains CSS files that style various components or sections of the website. Files such as **`Output.css`**, **`Style.css`**, **`Member.css`**, and **`Banner.css`** manage the visual appearance and layout across different pages.
2. **Additional Files**:
   - **`.gitignore`**: Specifies which files and directories to exclude from version control, maintaining a clean repository.
   - **`Index.html`**: The main entry point of the website, serving as the initial landing page for visitors.
   - **`ReadMe.md`**: Provides project documentation, instructions, or details about the project setup.
   - **`tailwind.config.js`**: Configuration file for Tailwind CSS, allowing customization of the CSS framework to fit specific project requirements.

### **Benefits of this Structure:**

- **Clear Organization**: Separates assets, pages, scripts, and styles into distinct directories within **`Src`**, facilitating easier navigation and maintenance.
- **Modularity**: Promotes modular development practices by grouping related files together, enhancing code reusability and scalability.
- **Accessibility**: Centralizes all project resources under one main directory (**`Src`**), making it straightforward for developers to locate and manage files.
- **Documentation**: Includes a **`ReadMe.md`** file for comprehensive project documentation, ensuring clarity and understanding among team members.

### **Conclusion:**

The **`Src`** folder serves as the foundational container for organizing and managing all essential project components, promoting efficient development practices and enhancing project maintainability. This structure supports collaboration and scalability, making it easier to expand and enhance the website over time.

Feel free to adjust this explanation further based on specific aspects you want to emphasize in your presentation.

# Resource and Tools

- Development tools (Visual Studio Code , Gitlab Repository, Figma):

- HTML, CSS, JavaScript(DOM):
  HTML :
  CSS :
  JavaScript :

- Web development using Tailwind CSS framework:
  What is TailwindCss ?
  It is an utility-first CSS framework packed with classes like **`flex`**, **`pt-4`**, **`text-center`** and **`rotate-90`** that can be composed to build any design, directly in your markup.
  How to use it ?
  Following Step:

  ### Tailwind CDN : Tailwind content delivery network.

  **1. Add the Play CDN script to your HTML**
  Add the Play CDN script tag to the **`<head>`** of your HTML file, and start using Tailwind’s utility classes to style your content.

  **2. Try customizing your config**
  Edit the **`tailwind.config`** object to **[customize your configuration](https://tailwindcss.com/docs/configuration)** with your own design tokens.

  **3. Try adding some custom CSS**
  Use **`type="text/tailwindcss"`** to add custom CSS that supports all of Tailwind's CSS features.

  **4. Try using a first-party plugin**
  Enable first-party plugins, like forms and typography, using the **`plugins`** query parameter.

# GIT-FLOW STRATEGY

1. **Git-flow Branching Strategy**
   - A team typically works using Git/Github, with team members creating Local repositories and Team Leaders creating Remote repositories. Team Leaders usually assign tasks for team members to complete.
   - The Main Branch is the primary container for production code. It is the initial branch that Git checks out locally when someone clones the repository, and it serves as the base for the production release.
   - The Develop Branch branches off the Main Branch, serving as a backup. It contains the latest work in progress and represents stable production code.
   - We create Feature branches in the Develop branch, where we work until it is ready to be merged into the Develop branch. These branches allow developers to work on particular features without affecting the main codebase.
   - A Release branch is created after development work is completed, serving as a temporary branch created to prepare for a new production release.
   - Bug-fix is started in the Release branch to ensure that the upcoming release is stable and free from critical issues.
   - Hot-fix is a branch used to solve critical issues or bugs in the live production version.
2. **Details of the Git-flow Processing and Command**
   - This section explains the process of creating a Remote repository, a Local repository, a Git-flow, a Feature branch, a Release branch, a Bug-fix branch from the Release branch, and a Hot-fix branch.
3. **Process of Git-Flow Strategy**
   - This section details the process of creating a Remote Repository, a Local Repository, and starting to work on the Feature branch, the Release branch and Bug-fix, and the Hot-fix branch.
4. **Track Branch Method**
   - This method is used to set up tracking for branches that have been created using Git Flow's feature, release, bug-fix, or hot-fix commands.
5. **Merge Branch Method**
   - Merging is a way to integrate changes from one branch into another. When a branch is merged into another branch, Git combines the changes from the source branch into the target branch.
6. **Rebase Branch Method**
   - Rebasing involves moving or "replaying" a series of commits from one branch into another branch's tip.
7. **Reset/Revert Branch Method**
   - First, get the hash of the branch, then use the command `git reset <hash>` to reset.
8. **Remote Alias, Commit History Method**
   - Use `git remote -v` to show the alias of the repository (fetch, origin).
   - Use `git log` to show the commit history.

# Conclusion

- The Git-Flow branching strategy offers a clear and organized approach to managing feature development, releases, and bug fixes. By utilizing branches such as main, develop, feature, release, bug-fix, and hot-fix, the project maintains a well-defined structure, enabling seamless integration of changes and ensuring the stability and reliability of the codebase.

# Name Convention

1. Git/GitHub:

   1. Remote Repository:

      - Creating Issue and choosing label:
        - Feature branch:
          - Feature-Issue : issue description.
          - Details : describe about the problem in detail
        - Release branch:
          - Release-version : release description.
          - Details : describe about the problem in detail
        - Bug-fix branch:
          - Bug : issue description
          - Details : describe about the problem in detail
        - Hot-fix branch:
          - Hot : issue description
          - Details : describe about the problem in detail
      - Workspace setup:
        - Assign the one who work on the issue.
        - Set the situation of the issue.
        - Match the project.
        - After finish, assign the reviewer
        - Make a code review.

      <aside>
      💡 Note: Pay attention to all aspects of the issue (title message, detail description, assigner, reviewer, label, project)

      </aside>

   2. Local Repository:

      - Branching the branch:
        - Name the branch according to the actual problem and what to do with that branch.
        - Feature branch:
          - command e.g : git flow feature start nav-bar
            - result of naming : feature/nav-bar
        - Release branch:
          - command e.g : git flow release start 1.0
            - result of naming : release/1.0
        - Bug-fix branch:
          - command e.g : git flow bugfix start {the actual problem} release/{name of the release branch}
            - result of naming : bugfix/{bugfix branch name}
        - Hot-fix branch:
          - command e.g : git flow hotfix start {name of the released version (tag)}, e.g : 1.1
            - result of naming : hotfix/1.1

      <aside>
      💡 Note: Everyone should name the branch according to the actual problem and what to do with that branch.

      </aside>

      - Commit message :
        - Commit branch :
          - feature : { describe about the problem in detail, which part you’ve worked on }
            - feature : home-page, add a menu button to nav-bar of home page.
          - release : { describe about the release version in detail }
            - release : release team website version 1.0
          - bugfix : { describe about the bug on the pre-release version }
            - bugfix : fixed the bug on pre-release version 1.0, error on register user account.
          - hotfix : { describe about the problem in detail, which part you’ve worked on and fixed }
            - hotfix : home-page, quick fix on released version 1.0, error on nav-bar and hero section.

      <aside>
      💡 Note: Give a meaningful commit message.

      </aside>

   3. Folder Structure :

      - We keep all the source of the project in one folder called “src”.
      - Inside the “src” folder contains
        - components : contain all the contents (file.html).
        - images : divided into two more folders for storing icons and pictures.
        - pages : contain the main pages linked to all the components, (file.html).
        - scripts : contain the JavaScript file, the behaviors of the website function.
        - styles : contain the CSS file, For styling on the content if needed.

      <aside>
      💡 Note: Developers only work on the specify file or the assigned file from the team in order to avoid any errors or confusion in the team. Make sure to discuss with the team before start working on any files of the project folder.

      </aside>

   4. Function convention :
      - JavaScript : function should be named :
        - function firstName() { }
      - Variable :
        - const firstName
        - let firstName

# Website Development / Design Styles

1. Screen size using tailwind :

| Class            | Properties         |
| ---------------- | ------------------ |
| max-w-screen-sm  | max-width: 640px;  |
| max-w-screen-md  | max-width: 768px;  |
| max-w-screen-lg  | max-width: 1024px; |
| max-w-screen-xl  | max-width: 1280px; |
| max-w-screen-2xl | max-width: 1536px; |

1. Screen responsive using tailwind :

| Breakpoint prefix | Minimum width | CSS                                |
| ----------------- | ------------- | ---------------------------------- |
| sm                | 640px         | @media (min-width: 640px) { ... }  |
| md                | 768px         | @media (min-width: 768px) { ... }  |
| lg                | 1024px        | @media (min-width: 1024px) { ... } |
| xl                | 1280px        | @media (min-width: 1280px) { ... } |
| 2xl               | 1536px        | @media (min-width: 1536px) { ... } |

1. Website Styling :

### Colors :

![Screenshot_2024-05-08_at_10.09.29_in_the_morning](/uploads/b863a05c07eb8e5d52d3f8e296e7687b/Screenshot_2024-05-08_at_10.09.29_in_the_morning.png)

### Background Colors:

- #ffffff
- #f7f7f7
- #f5f5f5
- #e5e7eb
- #d1d5db
- #000000

### Text Colors:

- #ffffff
- #9ca3af
- #757575
- #747476
- #707072
- #616161
- #11827
- #000000

### Fill Colors:

- #111111

### Border Colors:

- #e5e7eb

### Fonts :

Font-Style : Libre Baskerville, Alfa Slab One.
![Screenshot_2024-05-08_at_10.07.28_in_the_morning](/uploads/3377e1c2746844d1cf515b2a6aa0e40f/Screenshot_2024-05-08_at_10.07.28_in_the_morning.png)
Font Size
Title : [60px]
Heading : [26px]
Description : [16px]
Paragraph : [14px]
