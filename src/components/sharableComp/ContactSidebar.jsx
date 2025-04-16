import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faPaypal, faTelegram } from "@fortawesome/free-brands-svg-icons";

export const ContactSidebar = () => {
  return (
    <section className="h-screen flex items-center justify-center relative pt-16 ">
      <div className="min-h-[90%] flex flex-col gap-8 w-[80%] border-r border-white/10   px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Contact Us
        </h1>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-blue-500 hover:text-blue-400 transition-colors" />
            <span className="text-lg font-medium">example@mail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-500 hover:text-blue-400 transition-colors" />
            <span className="text-lg font-medium">Facebook</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faTelegram} size="2x" className="text-blue-500 hover:text-blue-400 transition-colors" />
            <span className="text-lg font-medium">Telegram</span>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faPaypal} size="2x" className="text-blue-500 hover:text-blue-400 transition-colors" />
            <span className="text-lg font-medium">Paypal</span>
          </div>
        </div>
      </div>
    </section>
  );
};