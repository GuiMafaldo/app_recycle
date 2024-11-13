import { Ionicons } from "@expo/vector-icons";

export type RecycleType = {
    id?: string;
    type: string;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
  };

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
};

export type RootTabParamList = {
    HomeStack: undefined;
    AgendarColetaStack: undefined;
    ContactStack: undefined;
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