import { ReactNode } from "react";

// styled
export interface IButtonProps {
  primary?: boolean;
}

export interface IFavoritedButtonProps {
  favorited?: boolean;
}

// components
export interface IPageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

export interface ITeacherItemProps {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface IProffy {
  proffy: ITeacherItemProps;
  favorited: boolean;
}
