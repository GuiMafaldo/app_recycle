import { Ionicons } from "@expo/vector-icons";
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  AgendarColetaStack: NavigatorScreenParams<AgendarColetaStackParamList>;
  ContactStack: NavigatorScreenParams<ContactStackParamList>;
  CreateStack: NavigatorScreenParams<CreateStackParamList>;
};

export type RecycleType = {
    id?: string;
    type: string;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
  };

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Create: undefined;
};
  
export type HomeStackParamList = {
    Home: any;
};
  
export type AgendarColetaStackParamList = {
    AgendarColeta: any;
};
  
export type ContactStackParamList = {
    Contact: any;
};

export type CreateStackParamList = {
    Create: any;
}