export type SkillCategory = 'software' | 'frontend' | 'backend' | 'security' | 'devops';

export interface Skill {
    name: string;
    icon: string;
    link: string;
    category: SkillCategory;
    className?: string;
}

export interface SkillCategoryConfig {
    id: SkillCategory;
    label: string;
    displayIndex: string;
}
