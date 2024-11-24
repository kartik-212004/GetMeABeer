
# 🍻 **Welcome to Get Me a Beer**

**Get Me a Beer** is a modern, fun, and seamless web application where users can:  
- 🌟 **Sign up** or **log in** effortlessly with **Google** or **GitHub**.
- 💸 **Send money** directly to **Kartik (Admin)** using the powerful **Razorpay** payment gateway.

This app is designed with cutting-edge technologies to deliver an exceptional user experience. Let's raise a glass to convenience! 🍺

---

## 🏆 **Features**

- 🔑 **Easy Authentication**  
  Quickly log in with Google or GitHub using **NextAuth** for a smooth user experience.

- 💳 **Secure Payments**  
  Integrated with **Razorpay**, enabling fast and secure transactions.

- 🎨 **Sleek User Interface**  
  Designed with **Tailwind CSS**, ensuring a visually stunning and responsive layout.

- ⚡ **Blazing Fast**  
  Powered by **Next.js** for unparalleled performance and server-side rendering.

- 🔐 **Robust Security**  
  Data protection ensured with **Bcrypt** and **Zod** for hashing and validation.

- 🛠️ **Type-Safe Development**  
  Built with **TypeScript** for maintainable and scalable code.

---

## 🚀 **Quick Start**

### **1. Clone the Repository**
```bash
git clone https://github.com/kartik-212004/get-me-a-beer.git
cd get-me-a-beer
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env.local` file in the root directory with the following values:
```env
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### **4. Start Development Server**
```bash
npm run dev
```
Access the app at [http://localhost:3000](http://localhost:3000).

### **5. Optional: Docker Setup**
For a containerized version, use Docker:
```bash
docker build -t get-me-a-beer .
docker run -p 3000:3000 get-me-a-beer
```

---

## 🛠️ **Technologies Behind the Scenes**

### **Frontend**
- ⚛️ **React 18**: Modern UI library for building interactive interfaces.
- 🌍 **Next.js 15**: Server-side rendering and static site generation for fast page loads.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for stunning designs.
- 🎯 **React Icons** & **Lucide React**: Ready-to-use icons for sleek visuals.

### **Backend**
- 🔐 **NextAuth**: Authentication with Google/GitHub OAuth.
- 🛢️ **Prisma**: Database ORM for seamless interactions.
- 💳 **Razorpay**: For payment gateway integration.

### **Utilities**
- ⚡ **Axios**: For fast HTTP requests.
- 🔒 **Bcrypt**: For secure password hashing.
- ✅ **Zod**: Schema validation for inputs.
- 🍞 **React Toastify** & **Toastr**: For real-time notifications.

### **Dev Tools**
- 🛡️ **TypeScript**: Ensures type safety.
- 🛠️ **ESLint**: Maintains code quality.
- 🖌️ **PostCSS**: For enhanced CSS capabilities.

---

## 📂 **Folder Structure**
```plaintext
📦 get-me-a-beer
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┣ 📂auth
 ┃ ┗ 📜index.tsx
 ┣ 📂components
 ┣ 📂styles
 ┣ 📂prisma
 ┣ 📂public
 ┣ 📜.env.local
 ┣ 📜Dockerfile
 ┣ 📜package.json
 ┗ 📜README.md
```

---



---

## 🤝 **Contributing**
We welcome contributions to improve **Get Me a Beer**. Fork the repository, make changes, and submit a pull request!

---

## 🎉 **Acknowledgments**
Special thanks to all the technologies and libraries that power this project.

---

## 📜 **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🍺 **Let’s Build Together!**
Raise a glass and start contributing to the **Get Me a Beer** project today! Cheers! 🥂

---
