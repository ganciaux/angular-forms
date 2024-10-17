import { FormPageLink } from "./form-page-link.model";

export const FORM_STATUS = ['draft', 'published', 'archived'] as const;

export type FormStatus = typeof FORM_STATUS[number];

export interface Form {
    id: string;
    title: string;
    description?: string;
    pages: FormPageLink[];
    createdAt: Date;
    updatedAt: Date;
    status: FormStatus;
    //style?: FormStyle;
  }