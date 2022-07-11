export interface PostProps {
  title: string;
  body: string;
  clickFunc: () => void;
}

export interface FormProps {
  formType: 'update' | 'create';
  onClickFunc: (titleText: string, titleBody: string) => void;
  loadingState: boolean
}

export interface PostAPIData {
  title: string;
  body: string;
  userId: number;
}

export interface PostType extends PostAPIData {
  id: number;
}
