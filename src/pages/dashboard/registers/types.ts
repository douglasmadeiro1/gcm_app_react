export interface Card {
    id: number; // mantemos como number
    title: string;
    description: string;
    image: string;
    onClick: () => void;
}