export interface Speaker {
  name: string;
  image: string;
  organization?: string;
}

export const speakers: Speaker[] = [
  {
    name: "DAO Contributor",
    image: "/chili.png",
    organization: "MetaCartel"
  }
];
