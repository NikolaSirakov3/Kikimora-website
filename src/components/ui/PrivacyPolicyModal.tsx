interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
        >
          ×
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Privacy Policy
            </h2>
            <p className="text-gray-600 text-lg">
              Last updated: September 1, 2022
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
            <p className="mb-4">
              The website{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>{" "}
              is owned by <strong>SoCyber Ltd</strong>., UIC: 202378214, a
              limited liability company incorporated under the laws of Republic
              of Bulgaria.
            </p>
            <p className="mb-4">
              Address: Bulgaria, Sofia 1612, Hipodruma Building 107A, Ap.1;
            </p>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:office@so-cyber.com"
                className="text-[#29ABE2] hover:underline"
              >
                office@so-cyber.com
              </a>
            </p>
            <p className="mb-6">
              The website provides its customers access to the services and
              products offered by <strong>SoCyber Ltd</strong>. and this website
              does not partake in online trading; both for individuals and legal
              entities. This Privacy Policy describes how your personal
              information is processed in the event that you provide your
              information through the contact form on the site. With this
              Privacy Policy, <strong>SoCyber Ltd</strong>. declares that it has
              implemented all technical and organizational measures to protect
              the personal data of individuals prescribed by law or regulation
              at national and European level.
            </p>

            <p className="mb-4">
              The data controller in the sense of the GDPR and other national
              data protection laws of the member states as well as other data
              protection regulations is:
            </p>
            <p className="mb-4">
              <strong>SoCyber Ltd</strong>, UIC: 202378214, a limited liability
              company incorporated under the laws of Republic of Bulgaria.
              Address: Bulgaria, Sofia 1612, Hipodruma, Building 107A, Ap.1;
              Email:{" "}
              <a
                href="mailto:office@so-cyber.com"
                className="text-[#29ABE2] hover:underline"
              >
                office@so-cyber.com
              </a>
            </p>
            <p className="mb-6">
              Governing law applicable to this Privacy Policy is the Regulation
              (EU) 2016/679 of the European Parliament and of the Council of 27
              April 2016 on the protection of natural persons with regard to the
              processing of personal data and on the free movement of such data,
              and repealing Directive 95/46/EC ('General Data Protection
              Regulation' or 'GDPR') and the Personal Data Protection Act in the
              Republic of Bulgaria.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              PERSONAL INFORMATION
            </h3>
            <p className="mb-4">
              When you visit{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>{" "}
              it automatically collects certain information about your device,
              including information about your web browser, IP address, time
              zone and some cookies that are installed on your device. In
              addition, as you browse the site, we collect information about the
              individual pages or products you browse, what sites or search
              keywords have directed you to{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>{" "}
              and information about how you interact with the site. We call this
              automatically collected information "Device Information". The site
              collects information about your device using the following
              technologies:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Cookies – data files that are automatically installed on your
                device or computer and often include an anonymous unique
                identifier. For more information about cookies and how to
                disable cookies, visit{" "}
                <a
                  href="http://www.allaboutcookies.org"
                  className="text-[#29ABE2] hover:underline"
                >
                  http://www.allaboutcookies.org
                </a>
              </li>
              <li>
                Log files – track site activity and collect data, including your
                IP address, browser type, internet service provider, redirects /
                landing pages, and date and time log.
              </li>
              <li>
                Web beacons, "tags" and "pixels" are electronic files used to
                record information about how you browse the Site.
              </li>
            </ul>
            <p className="mb-6">
              <strong>SoCyber Ltd</strong>. does not collect any special
              categories of personal data as such are not required for the use
              of our Website, Products or Services. If sensitive categories of
              personal data are provided by you in the course of your
              communication with the Company or use of our Website, Products or
              Services, it will be deleted as soon as possible after the
              processing of such data is established.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              HOW DO WE USE YOUR PERSONAL DATA?
            </h3>
            <p className="mb-4">
              When you are on our site{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>{" "}
              we use the information about the device to help us identify
              potential risks (through your IP address), as well as to improve
              and optimize the site (for example, by generating analyzes about
              what you view, how you interact with the site, and how to evaluate
              the results of our marketing and advertising campaigns). We also
              collect device information to deliver relevant content and ads to
              partner sites, and to measure or understand ad performance. When
              you leave your details through the contact form (name and surname,
              telephone number, e-mail), we will contact you to find out what
              you need and to offer you the best offer for it. We may process
              the following categories of your personal data:
            </p>
            <p className="mb-4">
              1. Communication data that you send to us, incl. any personal
              information you choose, whether by email, text message (SMS),
              social media messages, social media posting or other communication
              channels. We process this data in order to contact you, to
              identify bad faith and for legal protection.
            </p>
            <p className="mb-4">
              2. User data, which includes data on how you use the site. We
              process this data to effectively manage the site – to ensure its
              security, as well as to ensure that you provide faster and easier
              access to personalized content for you, based on an analysis of
              your interaction with site.
            </p>
            <p className="mb-6">
              3. Technical data – includes data on the use of the site, your IP
              address, details of your browser, duration of your visit to the
              site, navigation paths, details of the number of visits to the
              site, time zone settings of devices that you use to access the
              site. The source of this data is collected from a tracking
              analysis system. We process this data in order to analyze the use
              of the site, its administration and protection, as well as to
              provide you with interesting content and ads. We may also use the
              types of data described above to provide you with relevant content
              and ads (including ads on Facebook, Instagram, LinkedIn, etc.) to
              measure your ad performance. The legal basis for this processing
              is our legitimate interests, which include expanding our business.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              SPECIAL NOTICE – IF YOU ARE UNDER 18 YEARS OLD
            </h3>
            <p className="mb-6">
              Our Products and Services are not aimed at children under the age
              of 18. We will not deliberately collect, use, provide or process
              in any other form any personal information of children under the
              age of 18. We therefore also ask you, if you are under 18 years
              old, please do not send us your personal information (for example,
              your name, address and email address). If we learn that we have
              collected personal data through our Products and Services from a
              child under 18 without the consent of the child's parent or
              guardian as required by law, we will delete it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              THIRD PARTY SERVICES
            </h3>
            <p className="mb-4">
              We do not disclose your personal data to third parties, except in
              a situation where the third party is part of the provision of a
              service for you. The third-party providers we use will only
              collect, use and disclose your information to the extent necessary
              for them to perform the services they provide to us. We use Google
              to help us understand how customers use our site – you can read
              more about how Google uses your personal information here:{" "}
              <a
                href="https://policies.google.com/privacy?hl=en"
                className="text-[#29ABE2] hover:underline"
              >
                https://policies.google.com/privacy?hl=en
              </a>
            </p>
            <p className="mb-4">
              You can also opt out of Google Analytics here:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#29ABE2] hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
            <p className="mb-4">
              We may share your personal information in order to comply with
              applicable laws and regulations, respond to subpoenas or other
              legitimate requests for information we receive, and otherwise
              protect our rights. We do not sell or share personal information
              with another company. We do not purchase data from other Personal
              Data Administrators.
            </p>
            <p className="mb-6">
              Some of our service providers and partners are located outside
              European Union ("EU"), the European Economic Area ("EEA") and the
              United Kingdom("UK") including in the United States. Such
              countries may not offer your personal data the same level of
              protection as the laws in the EU, EEA or UK. Only in case one of
              our service providers, partners, affiliates and distributors are
              located or uses servers located outside of the EU or the EЕA we
              may transfer personal data outside of the said boundaries.
              However, in such cases <strong>SoCyber Ltd</strong>. shall ensure
              that adequate measures for protection of your personal data are in
              place and that the requirements of the GDPR are met before a
              cross-border transfer of personal data is executed. For more
              information about how we transfer Personal Data internationally,
              please contact us as set out in the "How to contact us" section
              above.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              INTERNET SITE
            </h3>
            <p className="mb-6">
              Our site is hosted by: SuperHosting.BG Ltd, Sofia, You can read
              their Privacy Policy here:{" "}
              <a
                href="https://en.superhosting.bg/web-hosting-page-terms-and-agreements.php"
                className="text-[#29ABE2] hover:underline"
              >
                https://en.superhosting.bg/web-hosting-page-terms-and-agreements.php
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              HOW DO WE GET YOUR CONSENT?
            </h3>
            <p className="mb-6">
              When you provide us with personal information by filling out the
              contact form on the site, you declare that you agree with the
              types of personal data processing that we perform related to the
              specific purpose specified in the contact form.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              YOUR RIGHTS
            </h3>
            <p className="mb-4">
              According to Regulation 679/2016 (GDPR) and Personal Data
              Protection Act you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                The right to be informed that your data is being processed, what
                type of processing is being carried out, how long your data is
                being stored, for what purposes it is being processed, what
                measures are being taken to secure it;
              </li>
              <li>
                The right to access your personal information – you have the
                right to access your stored data and to the data that were
                processed at the time of your request;
              </li>
              <li>
                The right to request from the Personal Data Administrator access
                to, correction or deletion of personal data or restriction of
                the processing of personal data – You have the right to request
                that your incorrect, incomplete, inaccurate or outdated data be
                corrected;
              </li>
              <li>
                The right to object the processing – E.g. you may object the use
                of your e-mail for direct marketing purposes;
              </li>
              <li>
                The right to data portability – you have the right to request
                from SoCyber Ltd. to provide a structured, widely used and
                machine-readable format for data transfer;
              </li>
              <li>
                The right to withdraw consent at any time – You can withdraw
                your consent to the processing of personal data without having
                to argue. Withdrawal of consent does not affect the lawfulness
                of prior processing;
              </li>
              <li>
                The right to appeal to a supervisory authority – You have the
                right to lodge a complaint or objection with the supervisory
                authority in the country:
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              COMMISION FOR PERSONAL DATA PROTECTION
            </h3>
            <p className="mb-4">
              Sofia 1592, Blvd. "Prof. Tsvetan Lazarov "№ 2; Bulgaria
              Information and Contact Center – tel. +3592 91-53-518 Reception –
              working hours 9:00 a.m – 5:30 p.m E-mail:{" "}
              <a
                href="mailto:office@cpdp.bg"
                className="text-[#29ABE2] hover:underline"
              >
                office@cpdp.bg
              </a>{" "}
              Website:{" "}
              <a
                href="http://www.cpdp.bg"
                className="text-[#29ABE2] hover:underline"
              >
                www.cpdp.bg
              </a>
              .
            </p>
            <p className="mb-6">
              • The right to be forgotten – You have the right to request that
              your personal data be deleted if you believe that the processing
              is illegal or if you believe that the personal data provided are
              no longer needed by SOCYBER Ltd. In some cases, however, the
              company will retain personal data if necessary to ensure the
              legality of its activities and compliance with legal and
              regulatory requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              STORAGE OF PERSONAL DATA
            </h3>
            <p className="mb-6">
              We will retain your personal information only for as long as is
              necessary to fulfill the purposes for which we collected it,
              including for the purposes of meeting all legal, accounting or
              reporting requirements. When deciding the exact time to retain
              data, we consider the volume, nature and sensitivity of the data
              and transactions, the potential risk of unauthorized use or
              disclosure, the purposes of the processing and whether ensuring
              our legitimate interests can be achieved by other means and under
              other legal requirements. For tax purposes, the law requires us to
              store basic information about our customers (including contact
              information, identity, financial data and transactions objectified
              through payment documents) for five years. In some circumstances,
              we may anonymize your personal data for research or statistical
              purposes, in which case we may use this information indefinitely
              without further notice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              HOW TO CONTACT US
            </h3>
            <p className="mb-4">
              Within the meaning of Regulation 679/2016 (GDPR) and the Personal
              Data Protection Act in the Republic of Bulgaria SoCyber Ltd. is a
              Personal Data Administrator. If you have any questions or
              concerns, you can contact us in the following ways:
            </p>
            <p className="mb-4">
              Address: Bulgaria, Sofia 1612, Hipodruma, Building 107A, Apr.1
            </p>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:office@so-cyber.com"
                className="text-[#29ABE2] hover:underline"
              >
                office@so-cyber.com
              </a>
            </p>
            <p className="mb-6">Phone: +359 876761364</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              COPYRIGHT AND INTELLECTUAL PROPERTY
            </h3>
            <p className="mb-6">
              Both the presentation and the entire content of this site are
              protected by intellectual property rights. You may use the
              information, text, images or graphics contained on this site for
              your personal use (non-commercial) and may not reproduce, modify,
              transmit, license or publish – in whole or in part, for any
              purpose, without the prior written consent{" "}
              <strong>SoCyber Ltd</strong>., except for review only.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              TRADEMARKS
            </h3>
            <p className="mb-6">
              All trademarks and logos displayed on this site are property of{" "}
              <strong>SoCyber Ltd</strong> or third parties. It is forbidden to
              use, download, permanently reproduce or distribute them in any way
              without the written permission of <strong>SoCyber Ltd</strong> or
              third parties, as the case may be.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              HYPERLINKS
            </h3>
            <p className="mb-6">
              The site{" "}
              <strong>
                <a
                  href="https://kikimora.io"
                  className="text-[#29ABE2] hover:underline"
                >
                  https://kikimora.io
                </a>
              </strong>{" "}
              may contain hyperlinks to other Internet sites that are completely
              independent of this site. <strong>SoCyber Ltd</strong>. does not
              insist or guarantee the accuracy, completeness or authenticity of
              the information contained in any such hypertext link or other
              Internet site, and access to all other Internet sites linked to
              the site{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>{" "}
              is at your own risk.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              LIMITATIONS OF LIABILITY FOR DAMAGES
            </h3>
            <p className="mb-6">
              <strong>SoCyber Ltd</strong>. does not expressly undertake any
              obligation to indemnify in respect of any direct, indirect,
              incidental, causal or special damages arising out of or in any way
              connected with access to or use of the site{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>{" "}
              including, but not limited to, any loss or damage caused by
              viruses that have affected your computer equipment or your trust
              in the information obtained through the site{" "}
              <a
                href="https://kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                https://kikimora.io
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AMMENDMENTS AND UPDATES IN CURRENT POLICY
            </h3>
            <p className="mb-6">
              This Policy may be updated at any time. We invite you to regularly
              review the current version every time you visit the site, so that
              you are constantly informed about possible changes.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Date of last revision: September 1, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
