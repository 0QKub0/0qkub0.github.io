'use client';

export default function Form() {
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
            <style jsx>{`
                .container {
                display: grid;
                grid-template-rows: 20px 1fr 20px;
                align-items: center;
                justify-items: center;
                min-height: 100svh;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid var(--foreground);
                    border-radius: 8px;
                    background-color: var(--background);
                    color: var(--foreground);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    color: var(--foreground);
                }
                .form-control {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid var(--foreground);
                    border-radius: 4px;
                    background-color: var(--background);
                    color: var(--foreground);
                }
                .form-control:focus {
                    outline: none;
                    border-color: #007bff;
                    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
                }
                .btn {
                    display: inline-block;
                    padding: 10px 15px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #007bff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.2s ease-in-out;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
}