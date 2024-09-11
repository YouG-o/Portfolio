export interface WhoAmI {
    type: 'whoami';
    id: number;
    name: string;
    icon: string;
    introduction: string;
    hobbies: string;
    myStack: {
        languages: string[];
        frontEnd: string[];
        backEnd: string[];
        dataBases: string[];
        tools: string[];
    };
}

export interface TrainingDetails {
    title: string;
    degree: string;
    school: string;
    schoolIcon?: string;
    location: string;
    date: string;
    length: string;
    description: string;
    skills: string[];
    link?: string;
}

export interface Training {
    type: 'training';
    id: number;
    name: string;
    icon: string;
    trainings: TrainingDetails[];
}

export interface Contact {
    type: 'contact';
    id: number;
    name: string;
    icon: string;
}