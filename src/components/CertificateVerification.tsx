import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  Search,
  Calendar,
  User,
  BookOpen,
} from "lucide-react";
import { findCertificate, Certificate } from "@/lib/certificateData";

const CertificateVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [searchResult, setSearchResult] = useState<
    Certificate | null | "not-found"
  >(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!certificateNumber.trim()) return;

    setIsSearching(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = findCertificate(certificateNumber.trim());
    setSearchResult(result || "not-found");
    setIsSearching(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-secondary/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Certificate Verification
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enter your certificate number below to verify its authenticity and
            view detailed information
          </p>
        </div>

        {/* Search Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Search className="h-5 w-5" />
              Verify Your Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 flex-col">
              <Input
                placeholder="Enter certificate number (e.g., CERT-2024-001)"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSearch}
                disabled={isSearching || !certificateNumber.trim()}
                className="min-w-[120px]"
              >
                {isSearching ? "Searching..." : "Verify"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResult && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {searchResult === "not-found" ? (
                  <>
                    <XCircle className="h-5 w-5 text-destructive" />
                    <span className="text-destructive">
                      Certificate Not Found
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-success">Certificate Verified</span>
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {searchResult === "not-found" ? (
                <div className="text-center py-8">
                  <div className="mb-4">
                    <XCircle className="h-16 w-16 text-destructive mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-destructive mb-2">
                    Certificate Not Found
                  </h3>
                  <p className="text-muted-foreground">
                    The certificate number "{certificateNumber}" could not be
                    found in our database. Please check the number and try
                    again.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Verification Status */}
                  <div className="flex items-center justify-between bg-success/10 p-4 rounded-lg">
                    <Badge
                      variant="outline"
                      className="border-success text-success"
                    >
                      ✅ VERIFIED
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Certificate #{searchResult.certificateNumber}
                    </span>
                  </div>

                  {/* Certificate Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">
                            Student Name
                          </h4>
                          <p className="text-foreground">
                            {searchResult.studentName}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">
                            Course Name
                          </h4>
                          <p className="text-foreground">
                            {searchResult.courseName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">
                            Course Duration
                          </h4>
                          <p className="text-foreground">
                            {formatDate(searchResult.startDate)} -{" "}
                            {formatDate(searchResult.endDate)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">
                            Issue Date
                          </h4>
                          <p className="text-foreground">
                            {formatDate(searchResult.issueDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Action */}
                  {/* <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      Download Verification PDF
                    </Button>
                  </div> */}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CertificateVerification;
