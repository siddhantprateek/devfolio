
import './footer.style.css';

const d = new Date();
const time = d.getFullYear()

export const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p>© Siddhant Prateek Mahanayak, {time} <br />All rights Reserved.</p>
        </div>
    </footer>
);