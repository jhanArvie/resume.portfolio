/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    // Cybersecurity Projects
    {
        id: "incident-response",
        techs: ["splunk", "wireshark", "incident", "tcpdump", "suricata"],
        links: {
            directory: "https://drive.google.com/drive/folders/1-IU_hEAxM1mA560dcE8ks6igdJ-XhTUt"
        },
        hasImage: true
    },
    {
        id: "risk-vulnerabilities",
        techs: ["risks"],
        links: {
            directory: "https://drive.google.com/drive/folders/1WBrA6Dmp2sGbkdsHj47HBIOWvOE9-FQ2"
        },
        hasImage: true
    },
    {
        id: "python-thumbnail",
        techs: ["python"],
        links: {
            directory: "https://drive.google.com/drive/folders/1otEbfNNVn7kvyW_AMUVylckg4Jqe4Fku"
        },
        hasImage: true
    },
    {
        id: "computer-networking",
        techs: ["network", "tcpdump"],
        links: {
            directory: "https://drive.google.com/drive/folders/1YmBOnKgoq1qRPqwhU-xFxKv5mBT7qgO2"
        },
        hasImage: true
    },
    {
        id: "linux-sql",
        techs: ["linux", "sql"],
        links: {
            directory: "https://drive.google.com/drive/folders/1K2T9DEJ33suJVNnvKm-OMh6MLeISCC8s"
        },
        hasImage: true
    },
    {
        id: "assets-control",
        techs: ["assets", "nist"],
        links: {
            directory: "https://drive.google.com/drive/folders/18WBZJwQ0lJnBwRwjvNJCD7XlSbzqvPJK"
        },
        hasImage: true
    },
    {
        id: "poemtales",
        isSmall: true,  
        techs: ["html", "css", "js", "figma"],
        links: {
            github: "jhanArvie/FED1-PE1-jhanArvie-1",
            live: "poemtales.netlify.app",
            figma: "https://www.figma.com/design/udV9skXSCpGCU8uE6dmsHO/Project-Exam-Blog-Post"
        },
        hasImage: true  
    },
    {
        id: "rainydays",
        isSmall: true,  
        techs: ["html", "css", "js", "figma"],
        links: {
            github: "jhanArvie/rainy-days-v2",
            live: "jhanarvie.github.io/rainy-days-v2",
            figma: "https://www.figma.com/design/UEbpcl1lDvc9wjveayDM32/Rainy-Days"
        },
        hasImage: true  
    },
    {
        id: "science-museum",
        isSmall: true,  
        techs: ["html", "css", "js", "figma"],
        links: {
            github: "jhanArvie/community_science_museum",
            live: "jhanarvie.github.io/community_science_museum",
            figma: "https://www.figma.com/design/0N9TUpWUpJjDHx4zqRzFDH/Museum"
        },
        hasImage: true  
    },
    {
        id: "nature-passion",
        isSmall: true,
        techs: ["figma"],
        links: {
            figma: "https://www.figma.com/design/qefogBMXpcnETDlhkx6TBb/Nature-Passion?node-id=25-7&t=DXIgjn0aKhybZYz4-1"
        },
        hasImage: true
    },
    {
        id: "webservices",
        isSmall: true,
        techs: ["html", "css", "js", "tailwind"],
        links: {
            live: "webplusservices.netlify.app/#home"
        },
        hasImage: true
    },
];

export default projects;
