export interface PostProps {
  title: string;
  body: string;
  clickFunc: () => void;
}

export interface FormProps {
  formType: 'update' | 'create';
  loadingState: boolean;
  onClickFunc?: (titleText: string, titleBody: string) => void;
  updateFunc?: (str: string, str2: string) => void;
  deleteFunc?: () => void;
  clearFields?: boolean;
  titleText?: string;
  bodyText?: string;
}

export interface PostAPIData {
  title: string;
  body: string;
  userId: number;
}

export interface PostType extends PostAPIData {
  id: number;
}

export interface CustomSnackbarType {
  message: string;
  type: 'Success' | 'Error' | '';
  isOpen: boolean;
  handleClose: () => void;
}

export interface UpdatePayloadType {
  id: number;
  title?: string;
  body?: string;
}
