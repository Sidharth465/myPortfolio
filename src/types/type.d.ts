declare interface ButtonProps {
  title?: string;
  processing?: boolean;
  IconLeft?: React.ComponentType<any>;
  className?: string;
}


declare interface PersonalDetail  {
  name: string;
  contact: string;
  mailId: string;
  address: string;
  college: string;
  course: string;
  session: string;
  experience:string;
  totalProject:string
};

declare interface Experience  {
  id: number;
  title: string;
  Company: string;
  location: string;
  timeSpan: string;
  type: string;
  image: string; 
  duration:string
};

declare interface  Skill  {
  id: number;
  title: string;
  imageUrl: string;
};

declare interface  StringsType  {
  HomePara: string;
  experieceData: Experience[];
  personalDetail: PersonalDetail;
  skillData: Skill[];
};