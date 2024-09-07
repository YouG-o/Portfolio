
export interface Project {
    _id: string;
    customId: number;
    name: string;
    isFictional?: boolean;
    icon: string;
    description: string;
    problems?: string;
    stack: string[];
    repository?: string;
    pictures?: string[];
    deploymentUrl?: string;
}