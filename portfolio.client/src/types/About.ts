export interface WhoAmI {
    type: 'whoami';
    id: number;
    name: string;
    icon: string;
    description: string;
    pictures?: string[];
}

export interface Training {
    type: 'training';
    id: number;
    name: string;
    icon: string;
    description: string;
    pictures?: string[];
}

export interface Contact {
    type: 'contact';
    id: number;
    name: string;
    icon: string;
    description: string;
    pictures?: string[];
}