import en_home from "./en/home.json";
import fr_home from "./fr/home.json";

import en_navigation from "./en/navigation.json";
import fr_navigation from "./fr/navigation.json";

import en_contact from "./en/contact.json";
import fr_contact from "./fr/contact.json";

import en_availability from "./en/availability.json";
import fr_availability from "./fr/availability.json";

import en_seo from "./en/seo.json";
import fr_seo from "./fr/seo.json";

import en_global from "./en/global.json";
import fr_global from "./fr/global.json";

import en_projects from "./en/projects.json";
import fr_projects from "./fr/projects.json";

import en_about from "./en/about.json";
import fr_about from "./fr/about.json";

import en_writing from "./en/writing.json";
import fr_writing from "./fr/writing.json";

const tags = {
  fr: {
    design: "Design",
    productivity: "Productivité",
    development: "Développement",
    writing: "Écriture",
    task_manager: "Gestion de tâches",
    browser: "Navigateur",
    deployment: "Déploiement",
    database: "Base de données",
    orm: "ORM",
    framework: "Framework",
    css: "CSS",
    terminal: "Terminal",
    notes: "Notes",
    calendar: "Calendrier",
    password_manager: "Gestionnaire de mots de passe",
    mail: "Mail",
    prototyping: "Prototypage",
    illustration: "Illustration",
    logo: "Logo",
    graphic_design: "Design graphique",
    retouching: "Retouche photo",
    photography: "Photographie",
  },
  en: {
    design: "Design",
    productivity: "Productivity",
    development: "Development",
    writing: "Writing",
    task_manager: "Task manager",
    browser: "Browser",
    deployment: "Deployment",
    database: "Database",
    orm: "ORM",
    framework: "Framework",
    css: "CSS",
    terminal: "Terminal",
    notes: "Notes",
    calendar: "Calendar",
    password_manager: "Password manager",
    mail: "Mail",
    prototyping: "Prototyping",
    illustration: "Illustration",
    logo: "Logo",
    graphic_design: "Graphic design",
    retouching: "Photo retouching",
    photography: "Photography",
  },
};

const messages = {
  en: {
    home: en_home,
    navigation: en_navigation,
    contact: en_contact,
    availability: en_availability,
    seo: en_seo,
    global: en_global,
    projects: en_projects,
    about: en_about,
    writing: en_writing,
    tags: tags.en,
  },
  fr: {
    home: fr_home,
    navigation: fr_navigation,
    contact: fr_contact,
    availability: fr_availability,
    seo: fr_seo,
    global: fr_global,
    projects: fr_projects,
    about: fr_about,
    writing: fr_writing,
    tags: tags.fr,
  },
};

export default messages;
