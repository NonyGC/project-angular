export interface Card {
  id: number;
  imageLink: string;
  title: string;
  description?: string;
  cardBodyItem: CardBodyItem[];
}

export interface CardBodyItem {
  icon: string;
  title: string;
  description: string;
}
