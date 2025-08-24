import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-black text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/verify")}
          >
            <div className="bg-accent p-2 rounded-lg">
              <GraduationCap className="h-8 w-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Worket India Private Ltd</h1>
              <p className="text-primary-foreground/80 text-sm italic">
                Empowering the future, today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
