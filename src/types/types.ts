import { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  AgendarColetaStack: NavigatorScreenParams<AgendarColetaStackParamList>;
  ContactStack: NavigatorScreenParams<ContactStackParamList>;
  CreateStack: NavigatorScreenParams<CreateStackParamList>;
};

export interface RecycleType {
    id: string;
    type: string;
    icon: string | any;
    color: string;
    shortDescription: string;
    longDescription: string;
    importance: string;
    whyRecycle: string;
    environmentalImpact: string;
    recyclingProcess: string;
    tips: string;
  }

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Create: undefined;
};
  
export type HomeStackParamList = {
    Home: any;
};
  
export type AgendarColetaStackParamList = {
    Coleta: any;
};
  
export type ContactStackParamList = {
    Contact: any;
};

export type CreateStackParamList = {
    Create: any;
}