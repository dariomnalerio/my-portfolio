import ContactForm from "./contact-form,";

export default function Contact() {
  return (
    <>
      {/* Contact title */}
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h2 className="text-4xl uppercase font-bold dark:text-slate-100 tracking-widest">
            Contact
          </h2>
          <div className="border-b-4 border-b-softblue rounded-md w-8 mt-8 self-center"></div>
        </div>
      </div>

      {/* Contact content */}
      <div className="flex justify-center items-center mt-28">
        <div className=" bg-gray-300 dark:bg-secondary lg:dark:bg-secondary rounded-lg px-10 py-12 lg:pb-28 lg:py-2 md:p-20 max-w-3xl w-full md:shadow-xl md:dark:shadow-md mx-3 md:mx-8">
          <ContactForm />
        </div>
      </div>
      </>
  );
}
