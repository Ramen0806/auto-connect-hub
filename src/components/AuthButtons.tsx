import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const AuthButtons = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://autoprotasks.netlify.app/dashboard',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });
      
      if (error) throw error;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in with Google. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        onClick={handleGoogleLogin}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Sign in"}
      </Button>
      <Button onClick={() => navigate("/get-started")}>
        Get Started
      </Button>
    </div>
  );
};