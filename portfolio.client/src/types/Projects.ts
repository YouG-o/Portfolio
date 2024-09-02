
export interface Projects {
    id: number;
    name: string;
    isFictional: boolean;
    icon: string;
    description: string;
    problems?: string;
    stack: string[];
    repository?: string;
    pictures?: string[];
    deploymentUrl?: string;
}