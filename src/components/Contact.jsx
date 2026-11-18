import React, { useState } from 'react';
import { departmentSnapshot } from '../data/departmentData';
import { 
  MapPin, Phone, Mail, Globe, Send, CheckCircle2, 
  AlertCircle, Clock, ShieldCheck 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programme: 'B.E. Mechanical Engineering',
    category: 'Admissions Enquiry',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Contact phone number is required';
    }
    if (!formData.message.trim()) errors.message = 'Please provide details of your enquiry';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setFormErrors({});
      // Form successfully validated
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Contact the Department
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our academic counselors, faculty heads, and admissions desk for programme 
            inquiries, collaborative research proposals, or campus visit arrangements.
          </p>
        </div>

        {/* Dual Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Contact Coordinates & Institutional Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-extrabold text-bit-navy mb-4">
                Official Department Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-bit-navy-soft text-bit-navy flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-bit-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-bit-navy">
                      {departmentSnapshot.contact.department}
                    </div>
                    <div>{departmentSnapshot.contact.addressLine2}</div>
                    <div>{departmentSnapshot.contact.campus}</div>
                    <div>{departmentSnapshot.contact.district}, {departmentSnapshot.contact.state} - {departmentSnapshot.contact.pincode}</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-bit-navy-soft text-bit-navy flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-bit-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-bit-navy">Direct Telephones</div>
                    <div>{departmentSnapshot.contact.phonePrimary}</div>
                    <div>{departmentSnapshot.contact.phoneSecondary}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-bit-navy-soft text-bit-navy flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-bit-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-bit-navy">Official Email Communications</div>
                    <div>{departmentSnapshot.contact.email}</div>
                    <div>{departmentSnapshot.contact.admissionsEmail}</div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-bit-navy-soft text-bit-navy flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-bit-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-bit-navy">Office Hours</div>
                    <div>Monday – Friday: 8:45 AM – 5:00 PM IST</div>
                    <div>Saturday: 8:45 AM – 1:00 PM IST</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600 flex-shrink-0" />
                <span>Verified BIT Institutional Coordinates</span>
              </div>
            </div>

            {/* Quick Direction Note */}
            <div className="bg-bit-navy text-white rounded-2xl p-6 shadow-sm border border-bit-navy-light">
              <h4 className="text-sm font-bold text-bit-gold-light mb-1">
                How to Reach BIT Sathyamangalam
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located on the Coimbatore–Bengaluru National Highway route, approximately 65 km from Coimbatore International Airport and 60 km from Erode Railway Junction.
              </p>
            </div>

          </div>

          {/* Right: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
            
            <h3 className="text-xl font-extrabold text-bit-navy mb-1">
              Submit an Academic or Admissions Enquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below and our department coordinator will respond within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900 mb-1">
                  Enquiry Successfully Submitted!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <strong className="font-semibold">{formData.fullName}</strong>. Your enquiry regarding <strong className="font-semibold">{formData.programme}</strong> has been routed to the Department of Mechanical Engineering desk at BIT.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      programme: 'B.E. Mechanical Engineering',
                      category: 'Admissions Enquiry',
                      message: ''
                    });
                  }}
                  className="px-5 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., Sundar Ramanathan"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      formErrors.fullName 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-slate-300 focus:ring-bit-navy'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        formErrors.email 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-slate-300 focus:ring-bit-navy'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        formErrors.phone 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-slate-300 focus:ring-bit-navy'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Programme of Interest & Enquiry Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Programme of Interest
                    </label>
                    <select
                      name="programme"
                      value={formData.programme}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-bit-navy"
                    >
                      <option value="B.E. Mechanical Engineering">B.E. Mechanical Engineering (UG)</option>
                      <option value="M.E. Industrial Safety Engineering">M.E. Industrial Safety Engineering (PG)</option>
                      <option value="Ph.D. Research Programme">Ph.D. Research Programme</option>
                      <option value="General Department Inquiry">General Department Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nature of Enquiry
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-bit-navy"
                    >
                      <option value="Admissions Enquiry">Admissions & Eligibility</option>
                      <option value="Curriculum & PCDP">Curriculum & PCDP Roadmap</option>
                      <option value="Laboratories & Facilities">Laboratories & Facilities Tour</option>
                      <option value="Placement & Internships">Placement & Internships</option>
                      <option value="Industry Collaboration">Industry R&D Collaboration</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message / Specific Question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify any particular questions regarding cut-offs, lab access, hostel facilities, or syllabus..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      formErrors.message 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-slate-300 focus:ring-bit-navy'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-bit-navy hover:bg-bit-navy-light text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-4 h-4 text-bit-gold" />
                  <span>Transmit Official Department Enquiry</span>
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Embedded Google Maps Location */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <span className="font-bold text-bit-navy flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-bit-gold" />
              Campus Geolocation: Bannari Amman Institute of Technology, Sathyamangalam
            </span>
            <a 
              href="https://maps.google.com/?q=Bannari+Amman+Institute+of+Technology+Sathyamangalam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bit-navy font-semibold hover:underline flex items-center"
            >
              <span>Open in Google Maps</span>
              <Globe className="w-3 h-3 ml-1" />
            </a>
          </div>
          <iframe
            src={departmentSnapshot.contact.mapEmbedUrl}
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BIT Campus Location Map"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;

