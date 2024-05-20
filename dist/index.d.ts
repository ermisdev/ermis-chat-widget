import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => React.JSX.Element;

interface ChatWidgetIProps {
    openWidget: boolean;
    onToggleWidget: () => void;
    token: string;
    senderId: string;
    receiverId?: string;
    primaryColor?: string;
}
declare const ErmisChatWidget: ({ openWidget, onToggleWidget, token, senderId, receiverId, primaryColor, }: ChatWidgetIProps) => React.JSX.Element;

export { Button, ErmisChatWidget };
