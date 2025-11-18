# 🎬 Movie Search Engine

<div align="center">

  ![Movie Search Engine](https://img.shields.io/badge/Movie-Search%20Engine-success?style=for-the-badge)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
  ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

  **A modern, responsive web application for searching and exploring movie information**

  [Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Technologies](#-technologies) • [Contact](#-connect-with-me)

</div>

---

## 📖 About The Project

Movie Search Engine adalah aplikasi web yang memungkinkan pengguna untuk mencari informasi detail tentang film favorit mereka. Dibangun dengan teknologi web modern dan menggunakan OMDb API untuk mengakses database film yang luas.

Aplikasi ini dirancang dengan antarmuka yang bersih dan responsif, memberikan pengalaman pengguna yang optimal di berbagai perangkat.

## ✨ Features

- 🔍 **Real-time Movie Search** - Cari film dengan cepat menggunakan keyword
- 🎨 **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile
- 🖼️ **Movie Posters** - Tampilkan poster film berkualitas tinggi
- 📊 **Detailed Information** - Lihat informasi lengkap meliputi:
  - Judul Film
  - Tahun Rilis
  - Genre
  - Director
  - Actors
  - Writer
  - Plot/Sinopsis
- 💫 **Interactive UI** - Modal popup untuk detail informasi
- 🎭 **Dynamic Styling** - Background gradient yang menarik
- ⚡ **Fast Loading** - Menggunakan AJAX untuk loading data tanpa refresh

## 🎯 Demo

### How It Works:
1. Masukkan nama film yang ingin dicari di search box
2. Klik tombol "Search" atau tekan Enter
3. Hasil pencarian akan ditampilkan dalam bentuk cards
4. Klik "More Details" untuk melihat informasi lengkap film

## 🚀 Installation

### Prerequisites
- Web Browser modern (Chrome, Firefox, Safari, Edge)
- Internet connection (untuk API calls)
- Text Editor (VS Code, Sublime Text, dll) - jika ingin modifikasi

### Steps

1. **Clone repository ini**
   ```bash
   git clone https://github.com/ketsar28/movie-search-engine.git
   ```

2. **Masuk ke direktori project**
   ```bash
   cd movie-search-engine
   ```

3. **Buka file `index.html` di browser**
   - Double click file `index.html`, atau
   - Gunakan live server di VS Code, atau
   - Jalankan local web server:
     ```bash
     python -m http.server 8000
     # atau
     php -S localhost:8000
     ```

4. **Siap digunakan!** 🎉

## 💻 Usage

### Basic Usage

```javascript
// Masukkan nama film di search box
// Contoh: "Avengers", "Inception", "The Matrix"
```

### API Key Information
Project ini menggunakan OMDb API. API key sudah termasuk dalam kode untuk keperluan demo:
```
API Key: 6d884f84
API URL: http://www.omdbapi.com/
```

> **Note**: Untuk production use, disarankan untuk mendaftar API key sendiri di [OMDb API](http://www.omdbapi.com/apikey.aspx)

### File Structure
```
movie-search-engine/
│
├── index.html          # Main HTML file
├── script.js           # JavaScript/jQuery logic
├── server.txt          # Server & API configuration notes
└── README.md           # Documentation
```

## 🛠️ Technologies

Project ini dibangun menggunakan teknologi berikut:

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure & Markup |
| **CSS3** | Styling & Animations |
| **JavaScript (ES6)** | Core Functionality |
| **jQuery** | DOM Manipulation & AJAX |
| **Bootstrap 5** | Responsive UI Framework |
| **OMDb API** | Movie Database |

### Key Libraries & Frameworks:
- **Bootstrap 5.2.0** - UI Components & Grid System
- **jQuery 3.6.0** - Simplified DOM manipulation
- **OMDb API** - Movie data provider

## 🎨 Design Features

- **Gradient Background** - Green to white gradient untuk visual yang menarik
- **Custom Scrollbar** - Styled scrollbar dengan gradient
- **Hover Effects** - Interactive hover states pada movie cards
- **Modal Dialog** - Clean modal untuk menampilkan detail film
- **Responsive Grid** - Menggunakan Bootstrap grid system

## 🔧 Configuration

Untuk mengubah API key atau endpoint, edit file `script.js`:

```javascript
// Baris 3 & 20
url: `http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=` + $(".input-here").val()
```

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🚧 Future Enhancements

- [ ] Add movie rating system
- [ ] Implement pagination for search results
- [ ] Add filter by year, genre, type
- [ ] Save favorite movies to local storage
- [ ] Dark mode toggle
- [ ] Movie recommendations
- [ ] Share functionality

## 🤝 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ketsar28/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ketsarali/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ketsar.aaw/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/ketsar)
[![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://share.streamlit.io/user/ketsar28)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send/?phone=6285155343380&text=Hello!%20I%20found%20your%20Movie%20Search%20Engine%20project)

**Let's connect and collaborate!**

</div>

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: [Contact via LinkedIn](https://www.linkedin.com/in/ketsarali/)
- **WhatsApp**: [Chat on WhatsApp](https://api.whatsapp.com/send/?phone=6285155343380&text=Hello!%20I%20found%20your%20Movie%20Search%20Engine%20project)

## 📝 License & Copyright

```
Copyright © 2024 Ketsar Ali

All rights reserved.

This project and its contents are the intellectual property of Ketsar Ali.
Unauthorized copying, distribution, or modification of this project,
via any medium, is strictly prohibited without explicit permission
from the copyright holder.

For permissions and inquiries, please contact via:
- LinkedIn: https://www.linkedin.com/in/ketsarali/
- GitHub: https://github.com/ketsar28/
```

---

<div align="center">

**Made with ❤️ by [Ketsar Ali](https://github.com/ketsar28/)**

⭐ **If you find this project helpful, please consider giving it a star!** ⭐

</div>
