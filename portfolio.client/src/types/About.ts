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

export interface Training {
    type: 'training';
    id: number;
    name: string;
    icon: string;
    description: string;
}

export interface Contact {
    type: 'contact';
    id: number;
    name: string;
    icon: string;
}