
const Footer = () => {
    return (
        <div className="pt-10">
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col flex flex-col items-center">
                    <p className="text-2xl font-extrabold">
                        Gadget Heaven   
                    </p>
                    <p>
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </aside>
            </footer>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="text-black font-extrabold text-[18px]">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-black font-extrabold text-[18px]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-black font-extrabold text-[18px]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;