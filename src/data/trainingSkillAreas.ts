// Skill area groupings for training/certificates
export interface CourseWithProvider {
  name: string;
  pdf: string;
  coursera?: string;
  provider: string;
}

export interface CertWithProvider {
  name: string;
  provider: string;
  coursera?: string;
  pdf?: string; // Add cert-level PDF property
  courses: CourseWithProvider[];
}

export const skillAreas: {
  area: string;
  summary: string; // Add summary field for each skill area
  items: CertWithProvider[];
}[] = [
    {
      area: 'Software Engineering & Development',
      summary: 'Professional certificates and courses covering full-stack development, DevOps, front and back-end engineering, data science, and other modern software practices.',
      items: [
        {
          name: 'Applied Software Engineering Fundamentals Specialization',
          provider: 'IBM',
          coursera: 'https://www.coursera.org/specializations/applied-software-engineering-fundamentals',
          pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Applied Software Engineering Fundamentals.pdf',
          courses: [
            {
              name: 'Applied Software Engineering Fundamentals',
              pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Applied Software Engineering Fundamentals.pdf',
              coursera: 'https://www.coursera.org/specializations/applied-software-engineering-fundamentals',
              provider: 'IBM',
            },
            {
              name: 'Introduction to Software Engineering',
              pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Introduction to Software Engineering.pdf',
              coursera: 'https://www.coursera.org/learn/introduction-to-software-engineering',
              provider: 'IBM',
            },
            {
              name: 'Hands-on Introduction to Linux Commands and Shell Scripting',
              pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Hands-on Introduction to Linux Commands and Shell Scripting.pdf',
              coursera: 'https://www.coursera.org/learn/hands-on-introduction-linux-commands-shell-scripting',
              provider: 'IBM',
            },
            {
              name: 'Getting Started with Git and GitHub',
              pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Getting Started with Git and GitHub.pdf',
              coursera: 'https://www.coursera.org/learn/getting-started-with-git-and-github',
              provider: 'IBM',
            },
            {
              name: 'Developing AI Applications with Python and Flask',
              pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Developing AI Applications with Python and Flask.pdf',
              coursera: 'https://www.coursera.org/learn/developing-ai-applications-with-python-and-flask',
              provider: 'IBM',
            },
            {
              name: 'Python for Data Science, AI & Development',
              pdf: '/WhoAmI/assets/training/IBM/Applied Software Engineering Fundamentals/Python for Data Science, AI & Development.pdf',
              coursera: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'DevOps and Software Engineering',
          provider: 'IBM',
          coursera: 'https://www.coursera.org/professional-certificates/devops-and-software-engineering',
          pdf: '',
          courses: [
            {
              name: 'Application Development using Microservices and Serverless',
              pdf: '/WhoAmI/assets/training/IBM/DevOps and Software Engineering/Application Development using Microservices and Serverless.pdf',
              coursera: 'https://www.coursera.org/learn/application-development-using-microservices-and-serverless',
              provider: 'IBM',
            },
            {
              name: 'Application Security for Developers and DevOps Professionals',
              pdf: '/WhoAmI/assets/training/IBM/DevOps and Software Engineering/Application Security for Developers and DevOps Professionals.pdf',
              coursera: 'https://www.coursera.org/learn/application-security-devops',
              provider: 'IBM',
            },
            {
              name: 'Continuous Integration and Continuous Deployment',
              pdf: '/WhoAmI/assets/training/IBM/DevOps and Software Engineering/Continuous Integration and Continuous Deployment.pdf',
              coursera: 'https://www.coursera.org/learn/continuous-integration-continuous-deployment',
              provider: 'IBM',
            },
            {
              name: 'DevOps Practices and Principles',
              pdf: '/WhoAmI/assets/training/IBM/DevOps and Software Engineering/DevOps Practices and Principles.pdf',
              coursera: 'https://www.coursera.org/learn/devops-practices-and-principles',
              provider: 'IBM',
            },
            {
              name: 'Site Reliability Engineering',
              pdf: '/WhoAmI/assets/training/IBM/DevOps and Software Engineering/Site Reliability Engineering.pdf',
              coursera: 'https://www.coursera.org/learn/site-reliability-engineering',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'Become a Professional React Developer',
          provider: 'Scrimba',
          coursera: '',
          pdf: '/WhoAmI/assets/training/Scrimba/Become a Professional React Developer/Become a Professional React Developer.pdf',
          courses: [
            {
              name: 'Become a Professional React Developer',
              pdf: '/WhoAmI/assets/training/Scrimba/Become a Professional React Developer/Become a Professional React Developer.pdf',
              coursera: '',
              provider: 'Scrimba',
            },
            {
              name: 'Learn Advance React',
              pdf: '/WhoAmI/assets/training/Scrimba/Become a Professional React Developer/Learn Advance React.pdf',
              coursera: '',
              provider: 'Scrimba',
            },
            {
              name: 'Learn React',
              pdf: '/WhoAmI/assets/training/Scrimba/Become a Professional React Developer/Learn React.pdf',
              coursera: '',
              provider: 'Scrimba',
            },
            {
              name: 'React Interview Questions',
              pdf: '/WhoAmI/assets/training/Scrimba/Become a Professional React Developer/React Interview Questions.pdf',
              coursera: '',
              provider: 'Scrimba',
            },
            {
              name: 'React JS Challenges',
              pdf: '/WhoAmI/assets/training/Scrimba/Become a Professional React Developer/React JS Challenges.pdf',
              coursera: '',
              provider: 'Scrimba',
            },
          ],
        },
        {
          name: 'Front-End Developer',
          provider: 'IBM',
          coursera: '',
          pdf: '',
          courses: [
            {
              name: 'Designing User Interfaces and Experiences (UI-UX)',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Designing User Interfaces and Experiences (UI-UX).pdf',
              coursera: 'https://www.coursera.org/learn/ui-ux-design',
              provider: 'IBM',
            },
            {
              name: 'Developing Front-End Apps with React',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Developing Front-End Apps with React.pdf',
              coursera: 'https://www.coursera.org/learn/developing-front-end-apps-with-react',
              provider: 'IBM',
            },
            {
              name: 'Developing Websites and Front-Ends with Bootstrap',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Developing Websites and Front-Ends with Bootstrap.pdf',
              coursera: 'https://www.coursera.org/learn/developing-websites-bootstrap',
              provider: 'IBM',
            },
            {
              name: 'Front-End Development Capstone Project',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Front-End Development Capstone Project.pdf',
              coursera: 'https://www.coursera.org/projects/front-end-development-capstone',
              provider: 'IBM',
            },
            {
              name: 'Get Started with Cloud Native, DevOps, Agile, and NoSQL',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Get Started with Cloud Native, DevOps, Agile, and NoSQL.pdf',
              coursera: 'https://www.coursera.org/learn/cloud-native-devops-agile-nosql',
              provider: 'IBM',
            },
            {
              name: 'Getting Started with Front-End and Web Development',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Getting Started with Front-End and Web Development.pdf',
              coursera: 'https://www.coursera.org/learn/getting-started-with-front-end-web-development',
              provider: 'IBM',
            },
            {
              name: 'Getting Started with Git and GitHub',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Getting Started with Git and GitHub.pdf',
              coursera: 'https://www.coursera.org/learn/getting-started-with-git-and-github',
              provider: 'IBM',
            },
            {
              name: 'IBM Front-End Developer',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/IBM Front-End Developer.pdf',
              coursera: 'https://www.coursera.org/professional-certificates/ibm-front-end-developer',
              provider: 'IBM',
            },
            {
              name: 'Intermediate Web and Front-End Development',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Intermediate Web and Front-End Development.pdf',
              coursera: 'https://www.coursera.org/learn/intermediate-web-front-end-development',
              provider: 'IBM',
            },
            {
              name: 'Introduction to HTML, CSS, & JavaScript',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Introduction to HTML, CSS, & JavaScript.pdf',
              coursera: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
              provider: 'IBM',
            },
            {
              name: 'Introduction to Software Engineering',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Introduction to Software Engineering.pdf',
              coursera: 'https://www.coursera.org/learn/introduction-to-software-engineering',
              provider: 'IBM',
            },
            {
              name: 'Software Developer Career Guide and Interview Preparation',
              pdf: '/WhoAmI/assets/training/IBM/Front-End Developer/Software Developer Career Guide and Interview Preparation.pdf',
              coursera: 'https://www.coursera.org/learn/software-developer-career-guide-interview-preparation',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'Full-stack JavaScript Developer',
          provider: 'IBM',
          coursera: '',
          pdf: '',
          courses: [
            {
              name: 'Application Development using Microservices and Serverless',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Application Development using Microservices and Serverless.pdf',
              coursera: 'https://www.coursera.org/learn/application-development-using-microservices-and-serverless',
              provider: 'IBM',
            },
            {
              name: 'Developing Back-End Apps with Node.js and Express',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Developing Back-End Apps with Node.js and Express.pdf',
              coursera: 'https://www.coursera.org/learn/developing-back-end-apps-with-nodejs-and-express',
              provider: 'IBM',
            },
            {
              name: 'Developing Front-End Apps with React',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Developing Front-End Apps with React.pdf',
              coursera: 'https://www.coursera.org/learn/developing-front-end-apps-with-react',
              provider: 'IBM',
            },
            {
              name: 'Get Started with Cloud Native, DevOps, Agile, and NoSQL',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Get Started with Cloud Native, DevOps, Agile, and NoSQL.pdf',
              coursera: 'https://www.coursera.org/learn/cloud-native-devops-agile-nosql',
              provider: 'IBM',
            },
            {
              name: 'Getting Started with Git and GitHub',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Getting Started with Git and GitHub.pdf',
              coursera: 'https://www.coursera.org/learn/getting-started-with-git-and-github',
              provider: 'IBM',
            },
            {
              name: 'Introduction to Containers w- Docker, Kubernetes & Openshift',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Introduction to Containers w- Docker, Kubernetes & Openshift.pdf',
              coursera: 'https://www.coursera.org/learn/introduction-to-containers-with-docker-kubernetes-openshift',
              provider: 'IBM',
            },
            {
              name: 'Introduction to HTML, CSS, & JavaScript',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Introduction to HTML, CSS, & JavaScript.pdf',
              coursera: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
              provider: 'IBM',
            },
            {
              name: 'Introduction to Software Engineering',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Introduction to Software Engineering.pdf',
              coursera: 'https://www.coursera.org/learn/introduction-to-software-engineering',
              provider: 'IBM',
            },
            {
              name: 'JavaScript Full Stack Capstone Project',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/JavaScript Full Stack Capstone Project.pdf',
              coursera: 'https://www.coursera.org/projects/javascript-full-stack-capstone',
              provider: 'IBM',
            },
            {
              name: 'JavaScript Programming Essentials',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/JavaScript Programming Essentials.pdf',
              coursera: 'https://www.coursera.org/learn/javascript-programming-essentials',
              provider: 'IBM',
            },
            {
              name: 'Node.js & MongoDB- Developing Back-end Database Applications',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Node.js & MongoDB- Developing Back-end Database Applications.pdf',
              coursera: 'https://www.coursera.org/learn/nodejs-mongodb-developing-back-end-database-applications',
              provider: 'IBM',
            },
            {
              name: 'Software Developer Career Guide and Interview Preparation',
              pdf: '/WhoAmI/assets/training/IBM/Full-stack JavaScript Developer/Software Developer Career Guide and Interview Preparation.pdf',
              coursera: 'https://www.coursera.org/learn/software-developer-career-guide-interview-preparation',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'Full Stack Software Developer',
          provider: 'IBM',
          coursera: '',
          pdf: '',
          courses: [
            {
              name: 'Application Development using Microservices and Serverless',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Application Development using Microservices and Serverless.pdf',
              coursera: 'https://www.coursera.org/learn/application-development-using-microservices-and-serverless',
              provider: 'IBM',
            },
            {
              name: 'Developing Back-End Apps with Node.js and Express',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Developing Back-End Apps with Node.js and Express.pdf',
              coursera: 'https://www.coursera.org/learn/developing-back-end-apps-with-nodejs-and-express',
              provider: 'IBM',
            },
            {
              name: 'Developing Front-End Apps with React',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Developing Front-End Apps with React.pdf',
              coursera: 'https://www.coursera.org/learn/developing-front-end-apps-with-react',
              provider: 'IBM',
            },
            {
              name: 'Get Started with Cloud Native, DevOps, Agile, and NoSQL',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Get Started with Cloud Native, DevOps, Agile, and NoSQL.pdf',
              coursera: 'https://www.coursera.org/learn/cloud-native-devops-agile-nosql',
              provider: 'IBM',
            },
            {
              name: 'Getting Started with Git and GitHub',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Getting Started with Git and GitHub.pdf',
              coursera: 'https://www.coursera.org/learn/getting-started-with-git-and-github',
              provider: 'IBM',
            },
            {
              name: 'Introduction to Containers w- Docker, Kubernetes & Openshift',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Introduction to Containers w- Docker, Kubernetes & Openshift.pdf',
              coursera: 'https://www.coursera.org/learn/introduction-to-containers-with-docker-kubernetes-openshift',
              provider: 'IBM',
            },
            {
              name: 'Introduction to HTML, CSS, & JavaScript',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Introduction to HTML, CSS, & JavaScript.pdf',
              coursera: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
              provider: 'IBM',
            },
            {
              name: 'Introduction to Software Engineering',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Introduction to Software Engineering.pdf',
              coursera: 'https://www.coursera.org/learn/introduction-to-software-engineering',
              provider: 'IBM',
            },
            {
              name: 'JavaScript Full Stack Capstone Project',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/JavaScript Full Stack Capstone Project.pdf',
              coursera: 'https://www.coursera.org/projects/javascript-full-stack-capstone',
              provider: 'IBM',
            },
            {
              name: 'JavaScript Programming Essentials',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/JavaScript Programming Essentials.pdf',
              coursera: 'https://www.coursera.org/learn/javascript-programming-essentials',
              provider: 'IBM',
            },
            {
              name: 'Node.js & MongoDB- Developing Back-end Database Applications',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Node.js & MongoDB- Developing Back-end Database Applications.pdf',
              coursera: 'https://www.coursera.org/learn/nodejs-mongodb-developing-back-end-database-applications',
              provider: 'IBM',
            },
            {
              name: 'Software Developer Career Guide and Interview Preparation',
              pdf: '/WhoAmI/assets/training/IBM/Full Stack Software Developer/Software Developer Career Guide and Interview Preparation.pdf',
              coursera: 'https://www.coursera.org/learn/software-developer-career-guide-interview-preparation',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'JavaScript Programming with React, Node & MongoDB',
          provider: 'IBM',
          coursera: '',
          pdf: '/WhoAmI/assets/training/IBM/JavaScript Programming with React, Node & MongoDB/JavaScript Programming with React, Node & MongoDB.pdf',
          courses: [
            {
              name: 'JavaScript Programming with React, Node & MongoDB',
              pdf: '/WhoAmI/assets/training/IBM/JavaScript Programming with React, Node & MongoDB/JavaScript Programming with React, Node & MongoDB.pdf',
              coursera: '',
              provider: 'IBM',
            },
            {
              name: 'JavaScript Programming Essentials',
              pdf: '/WhoAmI/assets/training/IBM/JavaScript Programming with React, Node & MongoDB/JavaScript Programming Essentials.pdf',
              coursera: 'https://www.coursera.org/learn/javascript-programming-essentials',
              provider: 'IBM',
            },
            {
              name: 'Developing Back-End Apps with Node.js and Express',
              pdf: '/WhoAmI/assets/training/IBM/JavaScript Programming with React, Node & MongoDB/Developing Back-End Apps with Node.js and Express.pdf',
              coursera: 'https://www.coursera.org/learn/developing-back-end-apps-with-nodejs-and-express',
              provider: 'IBM',
            },
            {
              name: 'Developing Front-End Apps with React',
              pdf: '/WhoAmI/assets/training/IBM/JavaScript Programming with React, Node & MongoDB/Developing Front-End Apps with React.pdf',
              coursera: 'https://www.coursera.org/learn/developing-front-end-apps-with-react',
              provider: 'IBM',
            },
            {
              name: 'Node.js & MongoDB- Developing Back-end Database Applications',
              pdf: '/WhoAmI/assets/training/IBM/JavaScript Programming with React, Node & MongoDB/Node.js & MongoDB- Developing Back-end Database Applications.pdf',
              coursera: 'https://www.coursera.org/learn/nodejs-mongodb-developing-back-end-database-applications',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'Vector Database Fundamentals',
          provider: 'IBM',
          coursera: '',
          pdf: '',
          courses: [
            {
              name: 'Vector Databases - An Introduction with Chroma DB',
              pdf: '/WhoAmI/assets/training/IBM/Vector Database Fundamentals/Vector Databases - An Introduction with Chroma DB.pdf',
              coursera: 'https://www.coursera.org/learn/vector-databases-introduction-chroma-db',
              provider: 'IBM',
            },
            {
              name: 'Vector Search with NoSQL Databases using MongoDB & Cassandra',
              pdf: '/WhoAmI/assets/training/IBM/Vector Database Fundamentals/Vector Search with NoSQL Databases using MongoDB & Cassandra.pdf',
              coursera: 'https://www.coursera.org/learn/vector-search-nosql-mongodb-cassandra',
              provider: 'IBM',
            },
            {
              name: 'Vector Search with Relational Databases using PostgreSQL',
              pdf: '/WhoAmI/assets/training/IBM/Vector Database Fundamentals/Vector Search with Relational Databases using PostgreSQL.pdf',
              coursera: 'https://www.coursera.org/learn/vector-search-relational-databases-postgresql',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'IBM Data Science Professional Certificate',
          provider: 'IBM',
          coursera: 'https://www.coursera.org/professional-certificates/ibm-data-science',
          pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Data Science Professional Certificate.pdf',
          courses: [
            {
              name: 'Data Science Fundamentals with Python and SQL',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Data Science Fundamentals with Python and SQL.pdf',
              coursera: 'https://www.coursera.org/learn/data-science-fundamentals-python-sql',
              provider: 'IBM',
            },
            {
              name: 'Data Science Methodology',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Data Science Methodology.pdf',
              coursera: 'https://www.coursera.org/learn/data-science-methodology',
              provider: 'IBM',
            },
            {
              name: 'Python for Data Science and AI',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Python for Data Science and AI.pdf',
              coursera: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
              provider: 'IBM',
            },
            {
              name: 'Databases and SQL for Data Science with Python',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Databases and SQL for Data Science with Python.pdf',
              coursera: 'https://www.coursera.org/learn/sql-data-science',
              provider: 'IBM',
            },
            {
              name: 'Data Visualization with Python',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Data Visualization with Python.pdf',
              coursera: 'https://www.coursera.org/learn/python-for-data-visualization',
              provider: 'IBM',
            },
            {
              name: 'Machine Learning with Python',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Machine Learning with Python.pdf',
              coursera: 'https://www.coursera.org/learn/machine-learning-with-python',
              provider: 'IBM',
            },
            {
              name: 'Applied Data Science Capstone',
              pdf: '/WhoAmI/assets/training/IBM/Data Science Professional Certificate/Applied Data Science Capstone.pdf',
              coursera: 'https://www.coursera.org/learn/applied-data-science-capstone',
              provider: 'IBM',
            },
          ],
        },
        {
          name: 'Applied Data Science with Python Specialization',
          provider: 'University of Michigan',
          coursera: 'https://www.coursera.org/specializations/data-science-python',
          pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Applied Data Science with Python.pdf',
          courses: [
            {
              name: 'Applied Data Science with Python',
              pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Applied Data Science with Python.pdf',
              coursera: 'https://www.coursera.org/specializations/data-science-python',
              provider: 'University of Michigan',
            },
            {
              name: 'Applied Machine Learning in Python',
              pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Applied Machine Learning in Python.pdf',
              coursera: 'https://www.coursera.org/learn/applied-machine-learning',
              provider: 'University of Michigan',
            },
            {
              name: 'Applied Plotting, Charting & Data Representation in Python',
              pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Applied Plotting, Charting & Data Representation in Python.pdf',
              coursera: 'https://www.coursera.org/learn/python-plotting',
              provider: 'University of Michigan',
            },
            {
              name: 'Applied Social Network Analysis in Python',
              pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Applied Social Network Analysis in Python.pdf',
              coursera: 'https://www.coursera.org/learn/python-social-network-analysis',
              provider: 'University of Michigan',
            },
            {
              name: 'Applied Text Mining in Python',
              pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Applied Text Mining in Python.pdf',
              coursera: 'https://www.coursera.org/learn/python-text-mining',
              provider: 'University of Michigan',
            },
            {
              name: 'Introduction to Data Science in Python',
              pdf: '/WhoAmI/assets/training/University of Michigan/Applied Data Science with Python/Introduction to Data Science in Python.pdf',
              coursera: 'https://www.coursera.org/learn/python-data-analysis',
              provider: 'University of Michigan',
            },
          ],
        },
      ],
    },
    {
      area: 'Leadership & Management',
      summary: 'Specializations and courses focused on leadership, team management, and organisational skills.',
      items: [
        {
          name: 'Leading People and Teams Specialization',
          provider: 'University of Michigan',
          coursera: 'https://www.coursera.org/specializations/leading-people-teams',
          pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Leading People and Teams Specialization.pdf',
          courses: [
            {
              name: 'Influencing People',
              pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Influencing People.pdf',
              coursera: 'https://www.coursera.org/learn/influencing-people',
              provider: 'University of Michigan',
            },
            {
              name: 'Inspiring and Motivating Individuals',
              pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Inspiring and Motivating Individuals.pdf',
              coursera: 'https://www.coursera.org/learn/motivate-people-teams',
              provider: 'University of Michigan',
            },
            {
              name: 'Leading People and Teams Capstone',
              pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Leading People and Teams Capstone.pdf',
              coursera: 'https://www.coursera.org/learn/leading-teams',
              provider: 'University of Michigan',
            },
            {
              name: 'Leading People and Teams Specialization',
              pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Leading People and Teams Specialization.pdf',
              coursera: 'https://www.coursera.org/specializations/leading-people-teams',
              provider: 'University of Michigan',
            },
            {
              name: 'Leading Teams',
              pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Leading Teams.pdf',
              coursera: 'https://www.coursera.org/learn/leading-teams',
              provider: 'University of Michigan',
            },
            {
              name: 'Managing Talent',
              pdf: '/WhoAmI/assets/training/University of Michigan/Leading People and Teams Specialization/Managing Talent.pdf',
              coursera: 'https://www.coursera.org/learn/management-of-talent',
              provider: 'University of Michigan',
            },
          ],
        },
        {
          name: 'Leading Diverse Teams & Organizations',
          provider: 'University of Michigan',
          coursera: 'https://www.coursera.org/learn/leading-diverse-teams-and-organizations',
          pdf: '/WhoAmI/assets/training/University of Michigan/Leading Diverse Teams & Organizations.pdf',
          courses: [
          ],
        },
        {
          name: 'How to Manage a Remote Team',
          provider: 'Microsoft',
          coursera: '',
          pdf: '/WhoAmI/assets/training/How to Manage a Remote Team.pdf',
          courses: [
          ],
        },
      ],
    },
  ];
