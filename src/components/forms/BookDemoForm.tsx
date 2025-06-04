
export function BookDemoForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const inputClasses =
    "w-full px-4 py-2 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:border-teal-500 focus:outline-none";
  const labelClasses = "block text-gray-700 mb-2 font-medium";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClasses}
          placeholder="Name"
        />
      </div>

      <div>
        <label htmlFor="workEmail" className={labelClasses}>
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="workEmail"
          name="workEmail"
          required
          className={inputClasses}
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="companyName" className={labelClasses}>
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          className={inputClasses}
          placeholder="Company"
        />
      </div>

      <div>
        <label htmlFor="companySize" className={labelClasses}>
          Company Size
        </label>
        <select id="companySize" name="companySize" className={inputClasses}>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="501+">501+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="numberOfAssets" className={labelClasses}>
          Number of Assets
        </label>
        <select
          id="numberOfAssets"
          name="numberOfAssets"
          className={inputClasses}
        >
          <option value="1-30">1-30 Assets</option>
          <option value="31-100">31-100 Assets</option>
          <option value="101-500">101-500 Assets</option>
          <option value="501+">501+ Assets</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      >
        Book Demo
      </button>
    </form>
  );
}
