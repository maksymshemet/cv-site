const epam = {
    name: "Epam Systems",
    url: "https://www.epam.com/"
}
const isd = {
    name: "ISD",
    url: "http://www.isd.dp.ua/en/"
}
const nix = {
    name: "N-iX",
    url: "https://www.n-ix.com/"
}

export const social = {
    email: "mailto:shemet.max92@gmail.com?subject=Greetings",
    github: "https://github.com/maksymshemet",
    skype: "skype:maksym.shemet?chat",
    linkedin: "https://www.linkedin.com/in/maksym-shemet-105036a4/"
}

export const about = `
    A software engineer with ${getExperienceYears()} years of commercial experience in software development. With a solid
    knowledge of Java SE/EE, C# Core, Unity (game engine), Python experience, SCRUM methodology,
    and a good understanding of OOP, development principles and flows. I have worked with various
    projects reaching from web-based platforms, RESTful web services based on microservice architecture to desktop applications and mobile games
`

export const skills = [
    "Java", "Spring Framework", "Hibernate", "JDBC",
    "Maven", "Gradle", "Apache Solr",
    "Python", "Airflow", "FastAPI", "C# Core", "Docker", "Terraform", "Kubernetes",
    "Jenkins", "Google Cloud", "Kafka", "Git", "TDD", "MySQL", "Oracle DB",
    "HTML5", "CSS3", "JavaScript"
]

export const projects = [
    {
        company: nix,
        position: "Senior Software Engineer",
        description: `
            An artificial Intelligence business provides advanced crop analytics to its customers by using proprietary Machine Learning
            algorithms applied to remote sensing captured imagery. It allows
            customers: to increase their yields, optimize chemical inputs, farm
            more sustainably and make earlier, more informed decisions.
        `,
        tags: ["Python", "Airflow", "Bottle", "FastAPI", "Kubernetes", "Terraform", "GraphQL", "Google Storage",
            "GKE", "GCE", "Cloud Run", "Packer", "Jenkins", "Github Actions", "Git" ],
        actions: [
            "Implement new features",
            "Implement terraform scripts",
            "Deploy from dev to prod environment",
            "Describe technical implementations",
            "Implement airflow pipelines",
            "Support and update legacy code",
            "Integrate with 3rd party systems"],
        startDate: "Sep 2019",
        endDate: "till now"
    },
    {
        company: epam,
        position: "Senior Software Engineer",
        description: `
            A product tester portal that is used to manage testing processes
            by collecting test results based on the country, mechanical tests
            of the material, feedback during the operation of products. The
            project has micro-service architecture and the goal is to evaluate
            the quality of products at all stages of development.
        `,
        tags: ["Java 8", "Spring Boot", "Spring Data", "Spring Cloud", "LiquidBase", "Maven", "Kafka", "Apache Solr",
            "Oracle DB", "Docker", "Kubernetes", "Checkstyle", "Sonar", "Instana", "Kibana", "Git" ],
        actions: [
            "Implemented RESTful services",
            "Improved performance",
            "Supported deployments from dev to prod environment",
            "Analysed requirements",
            "Groomed and estimated user stories",
            "Described technical implementations",
            "Managed and mentored developers"],
        startDate: "Mar 2018",
        endDate: "Sep 2019"
    },
    {
        company: epam,
        position: "Senior Software Engineer",
        description: `
            Web services that calculate a cost estimation for apparel and
            footwear during the design phase. The project has a micro-service
            architecture and the goal is to decrease production costs by
            letting designers see the predicted prices for the product
        `,
        tags: ["Java 8", "Spring Boot", "Spring Security", "Spring Data", "Spring Cloud", "LiquidBase", "Maven", "Zookeeper", "Elastic Search", "Oracle DB", "Docker", "Git" ],
        actions: [
            "Implemented RESTful services",
            "Improved performance",
            "Analysed requirements",
            "Groomed and estimated user stories",
            "Deployed to dev and sit environment",
            "Analyzed and documented defects"],
        startDate: "Jul 2017",
        endDate: "Mar 2018"
    },
    {
        company: nix,
        position: "Software Engineer",
        description: `
            A web portal provides people diagnosed with cancer access to
            their molecular profiling test results from certified diagnostic
            labs. And it provides access to related information, clinical trials,
            physicians and allows contacting other patients
        `,
        tags: ["Java 8", "Spring Boot", "Spring Data", "Maven", "LiquiBase", "PosgreSQL","Jenkins", "Git" ],
        actions: [
            "Implemented RESTful services",
            "Integrated with 3rd party systems",
            "Analysed requirements",
            "Groomed and estimated user stories"],
        startDate: "Jan 2017",
        endDate: "Jun 2017"
    },
    {
        company: nix,
        position: "Software Engineer",
        description: `
            CRM/ERP software for medium-sized businesses in many areas:
            bus company, chicken factories, real estate, food marketing. It
            consists of several desktop applications built via C# and Java
            server, created with a TDD approach
        `,
        tags: ["TDD", "Java 8", "Hibernate", "Maven",  "Gradle", "C#", "WinForms", "MySQL", "Git"],
        actions: [
            "Developed new features",
            "Supported legacy code"],
        startDate: "Nov 2015",
        endDate: "Jan 2017"
    },
    {
        company: isd,
        position: "Junior Software Engineer",
        description: `
            Medical software used by clinics and laboratories consists of
            several desktop applications and web servers. This desktop
            application is developed using C# and WinForms. And web
            services are designed via Java 6 and SOAP. 
        `,
        tags: ["Java 6", "JAX-WS", "JBOSS", "Hibernate", "Ant", "C#", "WinForms", "WCF", "Oracle DB", "SVN"],
        actions: [
            "Integrated with internal systems",
            "Supported legacy code"],
        startDate: "Dec 2014",
        endDate: "Oct 2015"
    },
    {
        company: isd,
        position: "Junior Software Engineer",
        description: `
            Internal management tools are used by managers and they
            provide helpful information about team tasks, like: status,
            assigned to, description, etc. It consists of a desktop application,
            an MS Outlook add-in and a web server
        `,
        tags: ["C#", "DevExpress", "WinForms", "WCF", "Entity Framework", "Oracle DB", "SVN"],
        actions: [
            "Implement WCF endpoints",
            "Developed MS Outlook add-in"],
        startDate: "Nov 2014",
        endDate: "Oct 2015"
    },
    {
        company: epam,
        position: "Junior Software Engineer",
        description: `
            It is a service-oriented software that manages events like healthcare conferences based on RESTful web services 
            and the Dropwizard framework. RAML Schemas were used to describe RESTful APIs
        `,
        tags: ["Java 7", "Maven", "Dropwizard", "Jetty", "Couchbase", "RAML", "Git"],
        actions: [
            "Developed RESTful services",
            "Developed JUnit tests"],
        startDate: "May 2014",
        endDate: "Oct 2014"
    }
];

function getExperienceYears() {
    return new Date().getFullYear() - 2014
}
