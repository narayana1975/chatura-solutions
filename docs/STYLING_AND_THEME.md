# Styling & Theme Documentation

Complete guide to styling, theming, and design customization for Chatura Solutions.

## Design System

### Color Palette

#### Primary Colors

- **Primary**: `#06b6d4` (Cyan) - Main brand color
- **Accent**: `#a855f7` (Purple) - Secondary highlights

#### Neutral Colors

- **Background**: `#ffffff` (White)
- **Foreground**: `#000000` (Black/Text)
- **Muted Foreground**: `#666666` (Gray text)
- **Border**: `#e5e7eb` (Light Gray)
- **Card**: `#f9fafb` (Off-white)

#### Semantic Colors

- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

### Using Colors in Components

```jsx
// Using Tailwind color classes
<div className="bg-cyan-500 text-white">
  Primary Color
</div>

<button className="bg-gradient-to-r from-purple-500 to-purple-600">
  Gradient Button
</button>

<div className="bg-gray-50 border border-gray-200">
  Card with Border
</div>
```

## Typography

### Font System

- **Primary Font**: Geist (UI and headings)
- **Mono Font**: Geist Mono (code blocks)
- **Fallback**: System fonts

### Font Sizes

- `text-xs` (12px) - Small labels
- `text-sm` (14px) - Subtext
- `text-base` (16px) - Body text
- `text-lg` (18px) - Large body
- `text-xl` (20px) - Section headers
- `text-2xl` (24px) - Page headers
- `text-3xl` (30px) - Main titles
- `text-4xl` (36px) - Hero titles

### Font Weights

- `font-light` (300) - Thin text
- `font-normal` (400) - Regular text
- `font-medium` (500) - Slightly bold
- `font-semibold` (600) - Bold
- `font-bold` (700) - Very bold

### Using Typography

```jsx
// Heading
<h1 className="text-4xl font-bold text-foreground">
  Main Title
</h1>

// Subheading
<h2 className="text-2xl font-semibold text-foreground">
  Section Title
</h2>

// Body text
<p className="text-base text-muted-foreground leading-relaxed">
  Regular paragraph text
</p>

// Accent text
<span className="text-sm font-semibold text-primary">
  Important Label
</span>
```

## Layout System

### Spacing Scale

Tailwind CSS spacing (4px units):

- `p-2` / `m-2` (8px)
- `p-4` / `m-4` (16px)
- `p-6` / `m-6` (24px)
- `p-8` / `m-8` (32px)
- `p-12` / `m-12` (48px)

### Flexbox Layouts

```jsx
// Horizontal center
<div className="flex items-center justify-center">
  Centered Content
</div>

// Space between
<div className="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

// Column layout
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Responsive flex
<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1">Column 1</div>
  <div className="flex-1">Column 2</div>
</div>
```

### Grid Layouts

```jsx
// 2x2 grid
<div className="grid grid-cols-2 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Item key={item.id} />)}
</div>

// 5-column grid (footer)
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
  {/* columns */}
</div>
```

## Component Styling

### Buttons

```jsx
// Primary Button
<button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
  Action Button
</button>

// Secondary Button
<button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
  Secondary
</button>

// Outline Button
<button className="border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
  Outline Button
</button>
```

### Cards

```jsx
// Basic Card
<div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
  Card Content
</div>

// Gradient Card
<div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-lg p-6">
  Content with gradient background
</div>

// Card with Border
<div className="bg-card border-l-4 border-primary rounded-lg p-6">
  Important content with accent border
</div>
```

### Forms

```jsx
// Input
<input
  type="text"
  placeholder="Enter text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
/>

// Select
<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

// Textarea
<textarea
  rows={4}
  placeholder="Enter message"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
/>
```

### Badges & Tags

```jsx
// Badge
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
  Badge
</span>

// Category Tag
<span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
  Category
</span>

// Status Badge
<span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
  Active
</span>
```

## Responsive Design

### Breakpoints

Tailwind CSS breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach

```jsx
// Mobile: single column
// Tablet (md): two columns
// Desktop (lg): three columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>

// Hide on mobile, show on desktop
<div className="hidden lg:block">
  Desktop-only content
</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">
  Mobile-only navigation
</div>
```

### Responsive Text

```jsx
// Small on mobile, large on desktop
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

// Different padding
<div className="p-4 md:p-6 lg:p-8">
  Content with responsive padding
</div>

// Responsive gap
<div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
  Items with responsive spacing
</div>
```

## Animations & Transitions

### Hover Effects

```jsx
// Scale on hover
<div className="hover:scale-105 transition-transform">
  Hover to scale
</div>

// Color transition
<div className="bg-gray-100 hover:bg-gray-200 transition-colors">
  Hover for color change
</div>

// Shadow lift
<div className="hover:shadow-lg transition-shadow">
  Hover to lift
</div>

// Translate
<div className="hover:-translate-y-1 transition-all">
  Hover to move up
</div>
```

### Transitions

```jsx
// Smooth all transitions
<div className="transition-all duration-300">
  Smooth element
</div>

// Specific property
<div className="transition-colors duration-200 hover:text-primary">
  Color change
</div>

// Custom duration
<div className="transition-opacity duration-500">
  Slow fade
</div>
```

## Gradients

### Gradient Backgrounds

```jsx
// Left to Right
<div className="bg-gradient-to-r from-purple-500 to-pink-500">
  Horizontal Gradient
</div>

// Top to Bottom
<div className="bg-gradient-to-b from-cyan-500 to-blue-500">
  Vertical Gradient
</div>

// Diagonal
<div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
  Diagonal Gradient
</div>

// Button gradient
<button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg">
  Gradient Button
</button>
```

## Shadows & Borders

### Shadows

```jsx
// Small shadow
<div className="shadow">
  Subtle shadow
</div>

// Medium shadow
<div className="shadow-md">
  Medium shadow
</div>

// Large shadow
<div className="shadow-lg">
  Large shadow
</div>

// Hover shadow
<div className="hover:shadow-lg transition-shadow">
  Shadow on hover
</div>
```

### Borders

```jsx
// Basic border
<div className="border border-gray-300">
  Border
</div>

// Colored border
<div className="border-l-4 border-primary">
  Left accent border
</div>

// Rounded corners
<div className="rounded-lg">
  Rounded 8px
</div>

<div className="rounded-full">
  Circle
</div>
```

## Customization

### Modifying Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#06b6d4',
      secondary: '#a855f7',
    }
  }
}
```

### Adding Custom Styles

In `globals.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all;
  }
  
  .card {
    @apply bg-white border border-gray-200 rounded-lg p-6;
  }
}
```

### Creating Variants

```css
@layer components {
  .surface {
    @apply bg-gray-50 rounded-lg p-4;
  }
  
  .surface.elevated {
    @apply shadow-md;
  }
}
```

## Best Practices

1. **Consistency**: Use color palette throughout
2. **Spacing**: Use spacing scale for consistency
3. **Typography**: Follow font hierarchy
4. **Responsive**: Test on all breakpoints
5. **Accessibility**: Maintain color contrast
6. **Performance**: Minimize CSS output
7. **Naming**: Use semantic class names
8. **Organization**: Group related styles

## Resources

- Tailwind CSS: https://tailwindcss.com
- Tailwind UI: https://tailwindui.com
- shadcn/ui: https://ui.shadcn.com
- Color Palette: https://tailwindcss.com/docs/customizing-colors

For more information, see `/docs/README.md`
