# 📌 React Native To-Do List with Redux Toolkit

This is a simple **To-Do List app** built with **React Native** and **Redux Toolkit**. The app allows users to **add, edit, mark as completed, and delete tasks**. It helps in learning how to manage global state using Redux in a React Native application.

---

## 🚀 Features
- ✅ **Add Tasks** - Create new to-do items.
- ✏️ **Edit Tasks** - Modify existing tasks.
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks.
- ✅ **Mark as Completed** - Toggle tasks between completed and pending.
- 💾 **State Management** - Uses Redux Toolkit for efficient state management.

---

## 📂 Project Structure
```
📦 react-native-todo-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 TodoItem.tsx
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📜 store.ts
 ┃ ┃ ┗ 📜 todoSlice.ts
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 TodoScreen.tsx
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 tsconfig.json
```

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/react-native-todo-app.git
cd react-native-todo-app
```

### **2️⃣ Install Dependencies**
```sh
yarn install  # or npm install
```

### **3️⃣ Run the App**
```sh
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS (Mac only)
```

---

## 🛠️ Tech Stack
- **React Native** - UI Development
- **Redux Toolkit** - State Management
- **TypeScript** - Strongly typed JavaScript

---

## 🎯 Usage Guide

### **📜 Add a Task**
1. Enter text in the input field.
2. Click the "Add Task" button.
3. Task appears in the list.

### **✏️ Edit a Task**
1. Click the **edit button (✏️)** next to the task.
2. The task text appears in the input field.
3. Modify the text and click "Edit Task" to save changes.

### **✅ Mark as Completed**
1. Click on a task to toggle between completed and pending.
2. Completed tasks have a **strikethrough** effect.

### **🗑️ Delete a Task**
1. Click the **delete button (❌)** to remove a task.

---

## 📄 Code Breakdown

### **Redux Slice (`todoSlice.ts`)**
```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    editTodo: (state, action: PayloadAction<{ id: number; newText: string }>) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

