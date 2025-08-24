import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificateVerification from "@/components/CertificateVerification";

const Verify = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CertificateVerification />
      <Footer />
    </div>
  );
};

export default Verify;