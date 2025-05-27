import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact">
      <div className="border-t border-stone-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tight">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <p className="my-4">{CONTACT.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
