import { useTheme } from "./ThemeProvider";
import "./styles.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme, toggleTheme);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
