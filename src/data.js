
const epam = {
    name: "Epam Systems",
    url: "#"
}
const isd = {
    name: "ISD",
    url: "#"
}
const nix = {
    name: "N-iX",
    url: "#"
}

export const about = `
 I'm a software engineer with ${getExperianceYears()} years of commercial experience in software development.
 I have a solid knowledge of Java SE/EE, C# Core, Unity (game engine), experience in Python and 
 Javascript and a have a good understanding of OOP, development principles and flows, SCRUM methodology. 
 I worked with a diverse variety of projects reaching from web-based platforms,  REStful web services based 
 on microservice architecture to desktop applications and mobile games.
`

export const skills = [
    "Java", "Spring Framework", "Hibernate", "JDBC",
    "Maven", "Gradle", "Apache Solr",
    "Python", "Airflow", "C# Core", "Docker", "Terraform", "Kubernetes",
    "Jenkins", "Google Cloud", "Kafka", "Git", "TDD", "MySQL", "Oracle DB",
    "HTML5", "CSS3", "JavaScript"
]

export const projects = [
    {
        company: nix,
        position: "Senior Software Engineer",
        description: "Artificial Intelligence business provides advanced crop analytics to its customers by using proprietary Machine Learning " +
            "algorithms applied to remote sensing captured imagery. It allows customers: to increase their yields, optimize chemical inputs," +
            " farm more sustainably and make earlier, more informed decisions.",
        tags: ["Python", "Airflow", "Bottle", "Kubernetes", "Kubeless", "Terraform", "GraphQL", "Google Storage",
            "GKE", "GCE", "Packer", "Jenkins", "Github Actions", "Git" ],
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
        description: "Product tester portal that is using to manage testing process, collecting test results based on the country, mechanical tests of the material, " +
            "feedback during the operation of products. The project has micro-service architecture and the goal is to evaluate the quality of products at all stages of development.",
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
        description: "Web services calculate an apparel cost estimation during the design phase. " +
            "The project has micro-service architecture and the goal is to decrease production costs by letting designers see the predictive prices for the product.",
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
        description: "Web portal that provides people diagnosed with cancer an access" +
            "to their molecular profiling test results from certified diagnostics labs, " +
            "and giving access to related information, clinical trials, physicians and other patients.",
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
        description: "CRM/ERP software for medium-sized businesses in many areas: bus company, chicken factories, real estate, " +
            "food marketing. It consists of several desktop applications built via C# and Java server, created with a TDD approach.",
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
        description: "Medical software used by medical clinics and laboratories consists of several desktop " +
            "applications and web servers. Desktop application developed using C# and WinForms and server-side " +
            "is SOAP web services developed via Java 6.",
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
        description: "Internal management tools are used by managers and provide helpful information about team tasks, " +
            "like: status, assigned to, description etc. It consists of a desktop application, MS Outlook add-in, web server. ",
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
        description: "It's service oriented software to manage events like healthcare conference" +
            "based on RESTful web services and Dropwizard framework. For describing RESTful APIs we used" +
            "RAML Schemas.",
        tags: ["Java 7", "Maven", "Dropwizard", "Jetty", "Couchbase", "RAML", "Git"],
        actions: [
            "Developed RESTful services",
            "Developed JUnit tests"],
        startDate: "May 2014",
        endDate: "Oct 2014"
    }
];

function getExperianceYears() {
    return new Date().getFullYear() - 2014
}
