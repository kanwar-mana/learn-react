# Currency Converter App

A modern and responsive currency converter application built with React and Tailwind CSS that allows users to convert between different currencies in real-time.

![Currency Converter App Screenshot]

## 🚀 Features

- Real-time currency conversion
- Swap between currencies with one click
- Clean and responsive UI
- Support for multiple currencies
- Custom hooks for currency data fetching
- Background image with glass morphism effect

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- Custom Hooks
- RESTful API Integration

## 📦 Installation

1. Clone the repository

```bash
git clone <repository-url>
cd 06_custom_curr
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## 🔧 Usage

1. Enter the amount you want to convert in the "From" input field
2. Select the source currency from the dropdown
3. Select the target currency from the "To" dropdown
4. Click the "Convert" button to see the result
5. Use the "Swap" button to quickly switch between currencies

## 📁 Project Structure

```
src/
├── components/
│   └── InputBox.jsx    # Reusable currency input component
├── hooks/
│   └── useCurrencyinfo.js    # Custom hook for fetching currency data
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```

## ⚙️ How It Works

- The app uses a custom hook `useCurrencyinfo` to fetch real-time currency data
- User inputs are managed through controlled components
- Currency conversion happens instantly upon form submission
- The swap feature allows quick currency exchange rate inversion

## 🌟 Key Components

### InputBox Component

- Handles currency selection
- Manages amount input
- Supports disabled state for converted amount display

### useCurrencyinfo Hook

- Fetches currency conversion rates
- Manages API response caching
- Handles error states

## 🎨 Styling

The application uses Tailwind CSS for styling with:

- Responsive design that works on all screen sizes
- Glass morphism effect for modern UI
- Consistent color scheme and spacing
- Interactive elements with hover and focus states

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👏 Acknowledgments

- Currency conversion API
- Background image from Pexels
- Tailwind CSS community for UI inspiration

---

Built with 💖 and React.js
