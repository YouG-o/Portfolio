import { Locale } from "./Types";

export interface Project {
    _id: string;
    customId: number;
    name: Record<string, Locale>;
    isFictional?: boolean;
    icon: string;
    description: Record<string, Locale>;
    problems?: Record<string, Locale>;
    stack: string[];
    repository?: string;
    pictures?: string[];
    deploymentUrl?: string;
}