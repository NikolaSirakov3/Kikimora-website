interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookiePolicyModal({ isOpen, onClose }: CookiePolicyModalProps) {
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
              Cookie Policy
            </h2>
            <p className="text-gray-600 text-lg">
              Last updated: October 24, 2022
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 font-montserrat">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What are cookies?
            </h3>
            <p className="mb-4">
              It is common practice on almost all professionally designed
              websites to use cookies. Cookies are small files that are
              downloaded to a computer and serve to optimize the user's visit in
              the site. Each time a user using the site reloads it, the browser
              sends the cookie to the server. This action, invisible to the
              user, informs the site of previous user activity. This is the key
              role of cookies to improve the customer experience and to
              facilitate the use of the site by the end customer. If the
              customer deactivates the cookies, he loses the opportunity to take
              advantage of all the functionality of the site. This policy
              explains what information is collected, how it is used and why
              cookies are sometimes required to be stored. This policy also
              concerning options for preventing the retention of these cookies.
              However, as noted above, this can lead to downgrading or
              "breaking" of some elements of the functionality of the sites.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How are cookies used?
            </h3>
            <p className="mb-4">
              The reasons for using cookies are described below in the policy.
              Unfortunately, in most cases, there are no standard options for
              disabling cookies without completely disabling the functionality
              and features they add to the site. If the user is not sure whether
              he needs cookies or not, it is recommended that they be left
              active.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Deactivation of cookies
            </h4>
            <p className="mb-6">
              You can prevent the setting of cookies by adjusting the settings
              in the browser see the Help section of your browser on how to do
              this. It should be kept in mind that deactivation of the cookies
              will affect the functionality of the site to which they apply and
              also affects many other websites that are used. Disabling cookies
              usually also disables certain features and capabilities of the
              site. Therefore, it is recommended that cookies not be
              deactivated.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cookies settings
            </h3>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Account-related cookies
            </h4>
            <p className="mb-4">
              When creating an account on our portal, we will use cookies to
              manage the registration process and general administration. These
              cookies are usually deleted when you log out, but in some cases
              may remain after that to remember the user's preferences for the
              site.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Login-related cookies
            </h4>
            <p className="mb-4">
              We use cookies when the user is in their account so that we can
              remember this. This protects him from having to "log in" every
              time he visits a new page. These cookies are usually removed or
              cleared when the user logs out of their account to ensure that
              they will only have access to restricted features and zones when
              they have logged in to their account.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Research-related cookies
            </h4>
            <p className="mb-6">
              Periodically, SoCyber offers user surveys and questionnaires to
              understand user settings in order to improve the site. These
              surveys may use cookies to remember who has already participated
              in a survey or to provide the user with accurate results.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Third-party cookies
            </h3>
            <p className="mb-4">
              In some special cases, cookies provided by trusted third parties
              are also used. The following lines details what third-parties'
              cookies you may find on{" "}
              <a
                href="http://www.kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                www.kikimora.io
              </a>
              .
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Google Analytics
            </h4>
            <p className="mb-4">
              The site uses Google Analytics, which is one of the most common
              and reliable analysis solutions on the global network, to help
              SoCyber understand how the visitors uses the site and the ways in
              which the organization can improve the visitors' work with it.
              These cookies can monitor indicators such as how much time the
              visitors spends on the site, other pages visited by him, etc., in
              order to continue the process of creating useful content. For more
              information about Google Analytics cookies, please see the
              official Google Analytics page.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Third-party analytics
            </h4>
            <p className="mb-4">
              Third-party analytics are used to track and measure site usage so
              that we can continue to create useful content. These cookies can
              track things such as how much time a visitor spends on the site or
              the pages they visit, which helps SoCyber understand how to
              improve their site for users.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Testing and optimization
            </h4>
            <p className="mb-4">
              From time to time new features are tested on the site and fine
              changes are made to the way the site is presented. When new
              features are still being tested, cookies can be used to provide
              the visitor with a consistent service, while ensuring that SoCyber
              is aware of which optimizations visitors value the most.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Behavioral advertising
            </h4>
            <p className="mb-4">
              We use advertisements to balance the costs of managing the site
              and to provide funding for its further development. The behavioral
              advertising cookies used by this site are designed to ensure that,
              where possible, SoCyber provides the most relevant ads by
              anonymously tracking users' interests and presenting similar
              things that they may be interested in.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Partner advertising
            </h4>
            <p className="mb-6">
              Some partners advertise on behalf of SoCyber, and cookies are
              tracked in partnership. This allows SoCyber to find out if
              customers have reached{" "}
              <a
                href="http://www.kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                www.kikimora.io
              </a>{" "}
              through one of the partners' sites.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              • Social media integration
            </h4>
            <p className="mb-6">
              The site{" "}
              <a
                href="http://www.kikimora.io"
                className="text-[#29ABE2] hover:underline"
              >
                www.kikimora.io
              </a>{" "}
              also uses social media buttons and /or plugins that allow the user
              to connect and share with social networks in various ways.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                This cookie policy is effective as of October 24, 2022 and will
                remain in effect except with respect to any changes in its
                provisions in the future, which will be in effect immediately
                after being posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
