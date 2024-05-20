import React from "react";
import "./style.css";
interface ChatWidgetIProps {
    openWidget: boolean;
    onToggleWidget: () => void;
    token: string;
    senderId: string;
    receiverId?: string;
    primaryColor?: string;
}
declare const ErmisChatWidget: ({ openWidget, onToggleWidget, token, senderId, receiverId, primaryColor, }: ChatWidgetIProps) => React.JSX.Element;
export default ErmisChatWidget;
