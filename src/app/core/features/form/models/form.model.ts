import { FormPageLink } from "./form-page-link.model";

export interface Form {
    id: string;
    title: string;
    description?: string;
    pages: FormPageLink[];
    createdAt: Date;
    updatedAt: Date;
    status: 'draft' | 'published' | 'archived';
    //style?: FormStyle;
  }