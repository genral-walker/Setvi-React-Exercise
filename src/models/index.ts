export interface PostProps {
  title: string;
  body: string;
  clickFunc: () => void;
}

export interface FormProps {
  formType: 'update' | 'create';
  onClickFunc: () => void;
  title?: string;
  body?: string;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
