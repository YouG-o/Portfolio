export interface Projects {
    id: number;
    name: string;
    icon: string;
    description: string;
    stack: string[];
    repository?: string;
    pictures?: string[];
}