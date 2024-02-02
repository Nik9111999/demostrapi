import type { Schema, Attribute } from '@strapi/strapi';

export interface AchievementsAndCertificationsAchievementsAndCertifications
  extends Schema.Component {
  collectionName: 'components_achievements_and_certifications_achievements_and_certifications';
  info: {
    displayName: 'Achievements And Certifications';
    icon: 'globe';
  };
  attributes: {
    certificat: Attribute.Media;
    title: Attribute.String;
    date: Attribute.Date;
    description: Attribute.Text;
  };
}

export interface DeveloperSectionDeveloperSection extends Schema.Component {
  collectionName: 'components_developer_section_developer_sections';
  info: {
    displayName: 'Developer section';
    icon: 'manyToOne';
    description: '';
  };
  attributes: {
    Link: Attribute.Enumeration<['Upwork', 'Github', 'Stack overflow ']>;
    URL: Attribute.String;
  };
}

export interface EducationEducations extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Educations';
    icon: 'book';
  };
  attributes: {
    label: Attribute.String;
    year: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ExperiencesExperiences extends Schema.Component {
  collectionName: 'components_experiences_experiences';
  info: {
    displayName: 'Experiences';
    icon: 'grid';
  };
  attributes: {};
}

export interface LinksectionsSociallink extends Schema.Component {
  collectionName: 'components_linksections_sociallinks';
  info: {
    displayName: 'sociallink';
  };
  attributes: {};
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'puzzle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    proficiency: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      >;
  };
}

export interface SocialLinksLink extends Schema.Component {
  collectionName: 'components_social_links_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    Name: Attribute.Enumeration<['LinkedIn', 'X', 'Facebook', 'Instagram ']>;
  };
}

export interface SourceProjectsSourceProjects extends Schema.Component {
  collectionName: 'components_source_projects_source_projects';
  info: {
    displayName: 'Source Projects';
    icon: 'database';
  };
  attributes: {
    projectName: Attribute.String;
    URL: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'achievements-and-certifications.achievements-and-certifications': AchievementsAndCertificationsAchievementsAndCertifications;
      'developer-section.developer-section': DeveloperSectionDeveloperSection;
      'education.educations': EducationEducations;
      'experiences.experiences': ExperiencesExperiences;
      'linksections.sociallink': LinksectionsSociallink;
      'skills.skills': SkillsSkills;
      'social-links.link': SocialLinksLink;
      'source-projects.source-projects': SourceProjectsSourceProjects;
    }
  }
}
