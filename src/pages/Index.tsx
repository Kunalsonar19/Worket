import { GraduationCap, Shield, Search, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Certificate Verification Portal
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Instantly verify the authenticity of certificates issued by Worket
              India Private Ltd. Secure, reliable, and trusted by employers
              worldwide.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/verify")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Search className="mr-2 h-5 w-5" />
              Verify Certificate
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Verify With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our verification system ensures the authenticity and integrity of
              all certificates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure & Trusted</CardTitle>
                <CardDescription>
                  Advanced security measures protect certificate data and ensure
                  authenticity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Instant Verification</CardTitle>
                <CardDescription>
                  Get verification results immediately with detailed certificate
                  information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Globally Recognized</CardTitle>
                <CardDescription>
                  Our certificates are recognized by employers and institutions
                  worldwide
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              How Certificate Verification Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enter Certificate Number
              </h3>
              <p className="text-muted-foreground">
                Input the unique certificate number found on your certificate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Database Check
              </h3>
              <p className="text-muted-foreground">
                Our system searches our secure database for matching records
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">View Results</h3>
              <p className="text-muted-foreground">
                Get detailed verification results with certificate information
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
