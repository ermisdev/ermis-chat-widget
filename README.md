## Overview

![Chatbot Demo](./logo.svg)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]() [![npm version](https://img.shields.io/badge/npm-v1.0.5-green)](https://www.npmjs.com/package/chatbot-widget-ui) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

**NPM Package Link:**
[ermis-chat-widget](https://www.npmjs.com/package/ermis-chat-widget)

**ermis-chat-widget** is a library for creating React.js, built using TypeScript.

**Features**:

- Implemented using React.js and TypeScript for robustness and type safety.
- Provides a customizable user interface for integrating chatbot functionality into web applications.
- Offers various configuration options to tailor the chatbot widget's appearance and behavior.

## Usage

1. Install the latest version:

```bash
npm install ermis-chat-widget
```

```bash
yarn add ermis-chat-widget
```

2. Import the library:

```javascript
import { ErmisChatWidget } from "ermis-chat-widget";
```

3. Use the `ErmisChatWidget` component:

```javascript
<ErmisChatWidget
  token="YOUR_TOKEN"
  senderId="YOUR_WALLET_ADDRESS"
  receiverId="RECEIVER_WALLET_ADDRESS"
  primaryColor="#eb4034"
/>
```

### Usage Example

```javascript
import React from "react";
import { ErmisChatWidget } from "ermis-chat-widget";

const App = () => {
  return (
    <div>
      <ErmisChatWidget
        token="YOUR_TOKEN"
        senderId="YOUR_WALLET_ADDRESS"
        receiverId="RECEIVER_WALLET_ADDRESS"
        primaryColor="#eb4034"
      />
    </div>
  );
};

export default App;
```

## Component Props

| Prop Name             | Type   | Default Value                                     | Description                                                                         |
| --------------------- | ------ | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `apiKey`              | string |                                                   | The API key required for the **OpenAI API** integration.                            |
| `openWidget`         | boolean | `"Chatbot"`                                       | The name/title of the chatbot displayed in the header.                              |
| `isTypingMessage`     | string | `"Typing..."`                                     | The message displayed when the chatbot is typing a response.                        |
| `IncommingErrMsg`     | string | `"Oops! Something went wrong. Please try again."` | The error message displayed when an API request fails.                              |
| `primaryColor`        | string | `"#eb4034"`                                       | The primary color used for styling elements like headers, buttons, and backgrounds. |
| `inputMsgPlaceholder` | string | `"Send a Message"`                                | The placeholder text shown in the chat input textarea.                              |
| `chatIcon`            | any    | `ChatIcon()` (ReactElement)                       | The icon displayed in the chatbot toggler button.                                   |
