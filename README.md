# 🔗 BitLinks — URL Shortener

BitLinks is a modern and minimal **URL Shortener web app** built with **Next.js**, **React**, and **Node.js API routes**.  
It allows users to create short, shareable links from long URLs instantly.

---

## 🚀 Features

- ✨ Shorten long URLs instantly  
- 🌐 Generate custom short URLs  
- 🔁 Redirect users automatically to original links  
- 📱 Fully responsive and mobile-friendly UI  
- ⚡ Built with Next.js App Router  
- 🧠 Client-side state management using React hooks  
- 💾 Stores links in MongoDB (via API routes)  
- 🎨 Styled with Tailwind CSS  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js (App Router)** | Frontend + Backend API Routes |
| **React** | UI Components |
| **Tailwind CSS** | Styling |
| **MongoDB / Mongoose** | Database |
| **Node.js** | Server environment |
| **Vercel** | Deployment |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ismailirshad/bitLinks.git
   ```

2. **Navigate into the project**
   ```bash
   cd bitLinks
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a `.env.local` file** in the root directory and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 How It Works

1. The user enters a long URL and an optional custom short name.  
2. The app sends a POST request to `/api/generate` with the data.  
3. The backend saves it in MongoDB with the mapping `{ shorturl → longurl }`.  
4. When visiting `/shorturl`, the app redirects to the original URL.  

---

## 🧱 Folder Structure

```
bitLinks/
├── app/
│   ├── api/
│   │   └── generate/route.js   # API endpoint for link generation
│   ├── shorten/page.js         # Main URL shortener page
│   ├── [shorturl]/page.js      # Redirect handler for shortened links
│   └── layout.js               # Root layout
├── public/                     # Static assets
├── styles/                     # Tailwind/global styles
├── .env.local                  # Environment variables
├── package.json
├── README.md
└── next.config.js
```

---

## 🌍 Deployment

Deploy easily using **Vercel**:

1. Push your code to GitHub  
2. Go to [Vercel](https://vercel.com) → “New Project”  
3. Import your GitHub repo (`Ismailirshad/bitLinks`)  
4. Add the environment variables  
5. Click **Deploy**

Your app will be live in seconds 🚀

---

## 🧑‍💻 Author

**Ismail Irshad**  
📧 [irshadsha164@gmail.com](mailto:irshadsha164@gmail.com)  
🌐 [GitHub: @Ismailirshad](https://github.com/Ismailirshad)

---

## 🪪 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

## 💬 Feedback

If you like this project, consider giving it a ⭐ on GitHub!  
For issues or suggestions, open an [issue here](https://github.com/Ismailirshad/bitLinks/issues).
