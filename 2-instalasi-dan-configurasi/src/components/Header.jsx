export default function Header({ title }) {
    return (
      <header>
        <h1>Welcome to {title ? title : 'React App'}</h1>
      </header>
    )
  }