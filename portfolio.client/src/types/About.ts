
import { Locale } from './Types';

export interface WhoAmI {
    _id: string;
    type: 'whoami';
    customId: number;
    name: Record<string, Locale>;
    icon: string;
    introduction: Record<string, Locale>;
    hobbies: Record<string, Locale>;
    myStack: {
        languages: string[];
        frontEnd: string[];
        backEnd: string[];
        dataBases: string[];
        tools: string[];
    };
}

export interface TrainingDetails {
    title: Record<string, Locale>;
    degree: string;
    school: string;
    schoolIcon?: string;
    location: string;
    date: string;
    length: Record<string, Locale>;
    description: Record<string, Locale>;
    skills: string[];
    link?: string;
}

export interface Training {
    _id: string;
    type: 'training';
    customId: number;
    name: Record<string, Locale>;
    icon: string;
    trainings: TrainingDetails[];
}

export interface Contact {
    _id: string;
    type: 'contact';
    customId: number;
    name: Record<string, Locale>;
    icon: string;
}