export interface WhoAmI {
    _id: string;
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
    _id: string;
    type: 'training';
    id: number;
    name: string;
    icon: string;
    trainings: TrainingDetails[];
}

export interface Contact {
    _id: string;
    type: 'contact';
    id: number;
    name: string;
    icon: string;
}