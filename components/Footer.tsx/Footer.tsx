const Footer = () => {
  return (
    <footer className="border-t bg-pink-400">
      <div className="flex container mx-auto justify-center">
        <div className="p-1">
          <h2 className="font-extralight text-xs">
            Made by &copy;
            <a href="https://github.com/FredH2O" target="_blank">
              Fred(Dad)
            </a>{" "}
            {new Date().getFullYear()}
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
