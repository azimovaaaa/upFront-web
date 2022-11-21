import React from 'react';
import './Faq.css';

function Faq() {
    return (
        <>
            {/* <h1 className='faq'>FAQ</h1>; */}
            <div className='faq-head'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className='faq-filter'>
                <button>General</button>
                <button>Pricing</button>
                <button>Landlord</button>
                <button>Investor</button>
                <button>Contact Us</button>
            </div>
      
            <div className='drop-down'>
                <details>
                    <summary>What is UpFront?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>How do I get started?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>How does UpFront work?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>How do I know UpFront is right for my company?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>Is UpFront available outside of the US?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>How do I get started?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>Who are UpFront’s partners?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>Why do I need to connect my accounts before accessing the platform?</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>I’m having trouble connecting my accounts</summary>
                    Something small enough to escape casual notice.
                </details>
                <details>
                    <summary>Once I’ve signed up, how long will it take to receive funds?</summary>
                    Something small enough to escape casual notice.
                </details>
            </div>
        </>
    )
}

export default Faq;
