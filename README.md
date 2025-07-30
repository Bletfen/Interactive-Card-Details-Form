# 💳 Interactive Card Details Form

A responsive and accessible credit card details form built with React and TypeScript. Users can input their card details and receive real-time feedback with formatted inputs and validation logic. Inspired by Frontend Mentor's challenge.

## 🚀 Live Demo

👉 [View Live Site](https://interactive-card-details-form-delta-azure.vercel.app/)

---

## 🛠️ Technologies Used

- ⚛️ React
- ⌨️ TypeScript
- 🎨 Tailwind CSS
- 🧪 Form Validation Logic
- 🧠 React Hooks (`useState`)

---

## 📦 Features

- ✅ Real-time input formatting for card number (groups of 4 digits)
- ✅ Only digits allowed in expiry date and CVC
- ✅ Field-specific error validation with user feedback
- ✅ Smooth mobile-first responsive design
- ✅ Custom SVG success confirmation
- ✅ Form reset with `Continue` button

---

## 📁 Folder Structure

src/
│
├── components/
│ ├── Cards.tsx
│ ├── CardForm.tsx
│ └── SubmitText.tsx
│
├── utils/
│ ├── handleChange.ts
│ ├── handleSubmit.ts
│ └── checkIfNoErrors.ts
│
├── types/
│ └── index.ts
│
├── App.tsx
└── main.tsx

---

## 🧩 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/Bletfen/Interactive-Card-Details-Form.git

    Install dependencies
   ```

npm install

Start development server

npm run dev

Build for production

    npm run build

🧪 Validation Highlights

    Card number: must contain exactly 16 digits (formatted with spaces)

    Expiration Month / Year: must be digits only

    CVC: must contain exactly 3 digits

    All fields required

📝 License

This project is open source and available under the MIT License.
🙌 Acknowledgments

Challenge based on Frontend Mentor — thanks for providing great UI inspiration!
