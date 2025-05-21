const PrivacyBody = () => {
    return (
        <div className="container mx-auto max-w-6xl mt-24 mb-24 px-4">
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-[#F4A896] font-bold text-4xl">Privacy Policy</h1>
                <div className="flex flex-col items-center gap-1 text-black font-medium">
                    <h2 className="text-[#F4A896] text-sm">Last Update</h2>
                    <p className="text-sm">20-Jan-2025</p>
                </div>
            </div>

            {/* Introduction */}
            <div className="mt-8 text-xl font-normal text-gray-700 leading-relaxed">
                <p>
                    Prime L P Real Estate L.L.C – privacy policy will explain how our organisation uses the
                    personal data we collect from you when you use our website.
                </p>
            </div>

            {/* Topics List */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Topics:</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>What data do we collect?</li>
                    <li>How do we collect your data?</li>
                    <li>How will we use your data?</li>
                    <li>How do we store your data?</li>
                    <li>Marketing</li>
                    <li>What are your data protection rights?</li>
                    <li>What are cookies?</li>
                    <li>How do we use cookies?</li>
                    <li>What types of cookies do we use?</li>
                    <li>How to manage your cookies</li>
                    <li>Privacy policies of other websites</li>
                    <li>Changes to our privacy policy</li>
                    <li>How to contact us</li>
                    <li>How to contact the appropriate authorities</li>
                </ul>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-[#F4A896] mb-4">How do we collect your data?</h2>
                <p>When you sign up to receive a service from any Prime L P Real Estate website including but not limited to; rentals, sales, property management, commercial property and competitions – we may ask for personal information about you. The personal information can consist of information such as your name, email address, postal address, telephone or mobile number or date of birth. Different web pages may ask for different personal information. By entering your details in the fields requested, you enable Prime L P Real Estate and its service providers to provide you with the services you select. Please note that sometimes on the web pages we will require you to provide additional personal information, and at times this may be sensitive information. When we ask for this information, we will specify further on these web pages why we are collecting your information and how we will use it. Prime L P Real Estate also uses cookies and collects IP addresses (an IP address is a number that can uniquely identify a specific computer or other network devices on the internet). We use analysis software to look at IP addresses and cookies for the purpose of enhancing your user experience. This information is not used to develop a personal profile of you and the log files are regularly purged.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-[#F4A896] mb-4">How do we store your data?</h2>
                <p>Prime L P Real Estate securely stores your data on our internal servers, and on our accounts on third-party cloud servers.

                    Prime L P Real Estate will hold your personal information on our systems for as long as is necessary for the relevant service, or relevant contract you hold with Prime L P Real Estate corporate retention schedule (this is a database that defines which documents should be kept and for how long). When you contribute your information to the Prime L P Real Estate website we will generally only keep this for as long as is reasonably required for the purpose for which it was submitted.

                    Access to our servers is on a needs-only basis for employees. We take stringent preventative measures to keep your data safe, including 2FA and encryption.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-[#F4A896] mb-4">Marketing</h2>
                <p>Prime L P Real Estate L.L.C would like to send you information about products and services of ours that we think you might like, as well as those of our partner companies.

                    If you have agreed to receive marketing, you may always opt-out at a later date.

                    You have the right at any time to stop Prime L P Real Estate from contacting you for marketing purposes or giving your data to other members of the Prime L P Real Estate.

                    If you no longer wish to be contacted for marketing purposes, please email hello@primelp.com with your name, and phone number and we will unsubscribe you. Alternatively, you can click “Unsubscribe” on any of our marketing emails.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-sm  text-[#F4A896] mb-2"><span className="text-black">Email us at:</span> hello@primelp.com</h2>
                <p>Call us: +971 (0) 56 520 3469</p>
                
            </div>
        </div>
    );
};

export default PrivacyBody;
