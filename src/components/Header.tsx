import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-provider";

const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
        <header className="header">

            <h1>Where is the world?</h1>
            {theme === 'dark' ? (
                <button
                    onClick={() => setTheme("light")}
                    className="toggle-theme-button"
                >
                    <Sun className="icon" />
                    <p>Light mode</p>
                </button>
            ) : (
                <button
                    onClick={() => setTheme("dark")}
                    className="toggle-theme-button"
                >
                    <Moon className="icon" />
                    <p>Dark mode</p>
                </button>
            )}
        </header>
    )
}

export default Header;