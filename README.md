# Project Management Admin Frontend

A comprehensive Angular-based admin dashboard for project management, built with Angular 20.3.0. This application provides a complete interface for managing projects, team members, milestones, risks, and customer information.

![Angular](https://img.shields.io/badge/Angular-20.3.0-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🚀 Features

### Core Functionality
- **Project Management**: Complete project lifecycle management with detailed forms
- **Team Management**: Add and manage team members with role assignments
- **Milestone Tracking**: Create and monitor project milestones and deliverables
- **Risk Management**: Identify, assess, and track project risks
- **Customer Management**: Maintain customer information and relationships
- **Responsive Design**: Mobile-friendly interface with collapsible sidebar

### UI/UX Features
- **Modern Dashboard**: Clean, professional interface with sidebar navigation
- **Responsive Layout**: Adapts to different screen sizes (desktop, tablet, mobile)
- **Interactive Components**: Smooth animations and hover effects
- **Collapsible Sidebar**: Space-efficient navigation with toggle functionality
- **Styled Action Buttons**: Gradient-styled buttons with hover animations

## 📁 Project Structure

```
src/app/
├── components/
│   ├── header/                     # Application header component
│   ├── sidebar/                    # Navigation sidebar component
│   ├── basic-project-detail-form/  # Basic project information form
│   ├── pmform/                     # Project manager form
│   ├── add-team-members/           # Team member management
│   ├── milestone/                  # Milestone tracking component
│   ├── risk/                       # Risk management component
│   └── customer/                   # Customer information component
├── app.component.*                 # Main application component
└── app.routes.ts                   # Application routing configuration
```

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 20.3.0
- **Language**: TypeScript
- **Styling**: CSS3 with custom styling and gradients
- **Build Tool**: Angular CLI
- **Package Manager**: npm
- **Testing**: Jasmine & Karma

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18.0.0 or later)
- **npm** (v9.0.0 or later)
- **Angular CLI** (v20.3.2 or later)

```bash
npm install -g @angular/cli
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mohamednishanm/projectManagementAdminFrontEnd.git
cd projectManagementAdminFrontEnd
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
ng serve
# or
npm start
```

The application will be available at `http://localhost:4200/`

### 4. Build for Production
```bash
ng build --prod
```

Build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Design

The application is fully responsive and includes:
- **Desktop**: Full sidebar navigation with expanded content areas
- **Tablet**: Collapsible sidebar with optimized layouts
- **Mobile**: Mobile-first design with touch-friendly interfaces

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

### Code Coverage
```bash
ng test --code-coverage
```

## 🎨 Styling Guidelines

The project uses custom CSS with:
- **CSS Variables**: For consistent theming and responsive design
- **Flexbox Layouts**: For responsive component arrangement
- **Gradient Styling**: Modern button and UI element designs
- **Smooth Transitions**: Enhanced user experience with animations

## 🔧 Configuration

### Environment Configuration
- Development: `src/environments/environment.ts`
- Production: `src/environments/environment.prod.ts`

### Angular Configuration
- `angular.json`: Project build and serve configurations
- `tsconfig.json`: TypeScript compiler options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Nishan M**
- GitHub: [@mohamednishanm](https://github.com/mohamednishanm)

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/mohamednishanm/projectManagementAdminFrontEnd/issues) page
2. Create a new issue with detailed information
3. Refer to the [Angular CLI Documentation](https://angular.dev/tools/cli)

---

**Built with ❤️ using Angular** 
