export interface ImageItem {
    uri: string;
    alt: string;
}
export interface Message {
    text: string;
    sender: 'user' | 'bot';
    type: 'response';  
  }