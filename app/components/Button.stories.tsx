import React from "react";
import Button from "./Button";

// 設定元件的基本配置
export default {
  title: "Components/Button", // Storybook 中的顯示位置
  component: Button,
  tags: ["autodocs"], // 自動生成文檔
};

// 定義一個故事範例：Primary 按鈕
export const Primary = {
  args: {
    label: "Primary Button",
    onClick: () => alert("Button clicked!"),
  },
};

// 定義另一個故事範例：Secondary 按鈕
export const Secondary = {
  args: {
    label: "Secondary Button",
    onClick: () => console.log("Secondary button clicked!"),
  },
};

export const Disabled = {
    args: {
      label: "Disabled Button",
      onClick: () => {},
      disabled: true, // 假設元件支援 disabled 屬性
    },
  };
  
