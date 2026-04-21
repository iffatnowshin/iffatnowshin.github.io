// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Academic Publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research and Academic Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-presented-our-paper-on-techno-economic-analysis-of-solar-wind-biogas-hybrid-renewable-energy-system-in-bangladesh-using-metaheuristic-algorithms-at-the-2023-first-international-conference-on-advances-in-electrical-electronics-and-computational-intelligence-ieee",
          title: 'Presented our paper on “Techno-Economic Analysis Of Solar/Wind/Biogas Hybrid Renewable Energy System in...',
          description: "",
          section: "News",},{id: "news-successfully-completed-my-b-sc-in-electrical-and-electronic-engineering-at-the-islamic-university-of-technology-iut",
          title: 'Successfully completed my B.Sc. in Electrical and Electronic Engineering at the Islamic University...',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-i-have-joined-northern-university-bangladesh-nub-as-a-lecturer-in-the-department-of-electrical-and-electronic-engineering-eee-looking-forward-to-teaching-and-conducting-academic-research",
          title: 'Excited to announce that I have joined Northern University Bangladesh (NUB) as a...',
          description: "",
          section: "News",},{id: "news-our-paper-enhancing-solar-panel-performance-a-machine-learning-approach-to-dust-detection-and-automated-water-sprinkle-based-cleaning-strategy-has-been-published-in-solar-energy-elsevier-very-proud-of-our-work-leveraging-cnn-vgg16-for-automated-dust-detection",
          title: 'Our paper “Enhancing solar panel performance: A machine learning approach to dust detection...',
          description: "",
          section: "News",},{id: "news-two-new-publications-this-month-grid-connected-inverter-for-photovoltaic-energy-harvesting-advances-in-topologies-and-control-techniques-in-energy-conversion-and-management-x-a-novel-transmittance-distribution-approach-for-quantifying-soiling-effects-on-photovoltaic-module-performance-in-measurement",
          title: 'Two new publications this month! 📚 “Grid-connected inverter for photovoltaic energy harvesting: Advances...',
          description: "",
          section: "News",},{id: "projects-automated-dust-detection-for-solar-panels",
          title: 'Automated Dust Detection for Solar Panels',
          description: "Machine learning frameworks for automated dust detection and cleaning strategies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_automated_dust_detection/";
            },},{id: "projects-hybrid-energy-systems-techno-economic-modeling",
          title: 'Hybrid Energy Systems Techno-Economic Modeling',
          description: "Techno-economic modeling for Solar/Wind/Biogas hybrid systems using metaheuristic algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_hybrid_energy_modeling/";
            },},{id: "projects-advanced-grid-connected-inverters",
          title: 'Advanced Grid-Connected Inverters',
          description: "Topologies and control techniques for photovoltaic energy harvesting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_grid_connected_inverters/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/iffat_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%66%66%61%74%6E%6F%77%73%68%69%6E@%69%75%74-%64%68%61%6B%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TUOgUesAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/iffat-nowshin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
