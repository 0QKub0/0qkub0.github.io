import { useState } from "react";

export default function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    return (
        <div className="container">
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}