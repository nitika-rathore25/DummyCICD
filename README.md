# Angular Dashboard with Tailwind CSS

A modern, responsive dashboard application built with Angular 17 and Tailwind CSS featuring a card-based UI with random data generation.

## Features

- ✨ **Beautiful Dashboard UI** - Clean and modern design
- 📱 **Responsive Layout** - Works perfectly on all devices
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🃏 **Card Components** - Dynamic card display with random data
- 📊 **Random Data Generation** - Service-based data fetching
- 🔄 **Refresh Functionality** - Update dashboard data on demand
- 📅 **Header with Date** - Dynamic date display
- 📝 **Activity Feed** - Recent activity tracking

## Project Structure

```
angular-dashboard/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── dashboard/
│   │   │   └── card/
│   │   ├── services/
│   │   │   └── data.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   │   └── app.component.css
│   ├── styles.css
│   ├── main.ts
│   └── index.html
├── angular.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd angular-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS** (if needed)
   ```bash
   npm run build
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:4200`
   - The application will automatically reload if you change any source files

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
```

## Components

### Header Component
- Displays dashboard title and subtitle
- Shows current date
- Gradient blue background

### Card Component
- Displays metrics with icons
- Shows value and description
- Colored left border based on metric type
- Hover effects for better interactivity

### Dashboard Component
- Grid layout with responsive columns (1 on mobile, 2 on tablet, 4 on desktop)
- Displays 8 random metric cards
- Refresh button to update data
- Recent activity feed

### Footer Component
- Company information
- Quick navigation links
- Contact information
- Copyright notice

## Data Service

The `DataService` generates random data for the dashboard:
- 8 different metrics with unique titles
- Random values displayed with appropriate formatting (K suffix for thousands)
- Descriptive text for each metric
- Color-coded borders for visual distinction

## Styling

The project uses Tailwind CSS for all styling:
- Custom color scheme with blue and gray tones
- Responsive grid system
- Gradient backgrounds
- Shadow effects and transitions
- Responsive typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Created with Angular CLI and Tailwind CSS
