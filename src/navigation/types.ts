export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  AddRequest: undefined;
  RequestDetail: {
    item: {
      id: string;
      title: string;
      description: string;
      createdAt: number;
    };
  };
};
