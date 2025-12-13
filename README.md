# Gen 1 Starters 3D

An interactive 3D experience featuring the original Generation 1 Pokémon starters built with React Three Fiber and Three.js.

## 🎮 Features

- **Interactive 3D Models**: Click on Charmander, Squirtle, or Bulbasaur to explore them in detail
- **Dynamic Camera Controls**: Smooth camera transitions and orbit controls for viewing angles
- **GSAP Animations**: Smooth transitions and camera movements

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **GSAP** - Professional animation library
- **Vite** - Fast build tool and development server

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gen1-starters-3d
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

- **Select a Pokémon**: Click on any of the three starter Pokémon to enter their dedicated scene
- **Camera Controls**: Use your mouse to orbit around the models
- **Navigate**: Click back buttons to return to the selection screen

## 📁 Project Structure

```
src/
├── components/
│   ├── models/          # 3D model components
│   │   ├── Charmander.jsx
│   │   ├── Squirtle.jsx
│   │   ├── Bulbasaur.jsx
│   │   └── ...
│   ├── Scene.jsx        # Main scene logic
│   ├── Scene1.jsx       # Charmander scene
│   ├── Scene2.jsx       # Squirtle scene
│   └── Scene3.jsx       # Bulbasaur scene
├── data/
│   └── Pokemons.json    # Pokémon data
├── App.jsx              # Main application component
└── main.jsx             # Entry point
public/
├── images/
│   └── clouds.jpeg      # Environment texture
└── models/              # 3D model files (.glb)
```
## 🎨 3D Models

The project includes 3D models for:
- All Generation 1 starter Pokémon and their evolutions
- Interactive platforms and environment elements
- Town scenery for background context

## 🌟 Highlights

- **Performance Optimized**: Efficient rendering with React Three Fiber
- **Interactive UI**: HTML overlays integrated with 3D scenes
- **Smooth Animations**: GSAP-powered camera transitions
- **Modular Architecture**: Clean component separation for maintainability

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Pokémon models and assets are used for educational purposes
- Built with the amazing React Three Fiber ecosystem
- Inspired by the original Generation 1 Pokémon games
