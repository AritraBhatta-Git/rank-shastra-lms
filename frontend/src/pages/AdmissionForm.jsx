import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  GraduationCap,
  BookOpen,
  Users,
  MapPin,
  Info,
  FileText,
  Send,
  Phone,
  Mail,
  School,
  Building,
  Target,
  ChevronDown,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import axios from 'axios';


// ✅ onBack prop accept kar raha hai
const AdmissionForm = ({ onBack }) => {
  const navigate = useNavigate();
  const handleBack = onBack ?? (() => navigate(-1));
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    countryCode: '+91',
    mobile: '',
    email: '',
    institutionType: 'School',
    schoolName: '',
    board: '',
    currentClass: '',
    degree: '',
    stream: '',
    targetExam: '',
    courseApplied: '',
    mode: '',
    guardianName: '',
    fatherName: '',
    motherName: '',
    guardianOtherName: '',
    guardianCountryCode: '+91',
    guardianMobile: '',
    occupation: '',
    income: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    source: '',
    previousCoaching: '',
    declaration: false
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const response = await axios.post(`${apiUrl}/admissions`, formData);
      
      if (response.data.success) {
        setSuccess(true);
        // Form reset logic if needed, but we'll show success state
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.response?.data?.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#7c3aed] transition-colors [&>option]:text-black [&>option]:bg-white";
  const labelClasses = "block text-sm font-semibold text-white/70 mb-1.5 ml-1";
  const sectionTitleClasses = "flex items-center gap-2 text-xl font-bold text-white mb-6 border-l-4 border-[#c8f000] pl-4";

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#0b0b18] relative overflow-hidden">
      {/* Background Decor */}
      <div className="purple-ambient w-[500px] h-[500px] bg-[#7c3aed]/10 top-[-10%] left-[-10%]" />
      <div className="purple-ambient w-[500px] h-[500px] bg-[#c8f000]/5 bottom-[-10%] right-[-10%]" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ✅ BACK BUTTON */}
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors group ml-2"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Options</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              ADMISSION <span className="text-[#c8f000]">FORM</span>
            </h1>
            <div className="inline-block bg-[#14122a] border border-white/10 rounded-full px-6 py-2">
              <span className="text-white/80 font-bold tracking-widest uppercase text-sm">
                Academic Year <span className="text-[#c8f000]">2026-27</span>
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Student Information */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><User size={24} className="text-[#c8f000]" /> 1. STUDENT INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <label className={labelClasses}>Full Name (As per School Records)</label>
                  <input type="text" name="studentName" onChange={handleChange} className={inputClasses} placeholder="Enter full name" required />
                </div>
                <div>
                  <label className={labelClasses}>Date of Birth</label>
                  <input type="date" name="dob" onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>Gender</label>
                  <select name="gender" onChange={handleChange} className={inputClasses} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Mobile Number</label>
                  <div className="flex gap-2">
                    <div className="relative w-1/3">
                      <select
                        name="countryCode"
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none pr-8 text-xs md:text-sm`}
                        value={formData.countryCode}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+1">🇨🇦 +1</option>
                        <option value="+65">🇸🇬 +65</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="tel"
                        name="mobile"
                        onChange={handleChange}
                        className={`${inputClasses} pl-10`}
                        placeholder="10-digit number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Email ID</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input type="email" name="email" onChange={handleChange} className={`${inputClasses} pl-10`} placeholder="example@mail.com" required />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ACADEMIC DETAILS */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><GraduationCap size={24} className="text-[#c8f000]" /> 2. ACADEMIC DETAILS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className={labelClasses}>Institution Type</label>
                  <select
                    name="institutionType"
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="School">School</option>
                    <option value="College">College</option>
                  </select>
                </div>
                <div className="lg:col-span-2">
                  <label className={labelClasses}>{formData.institutionType} Name</label>
                  <div className="relative">
                    <School size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input type="text" name="schoolName" onChange={handleChange} className={`${inputClasses} pl-10`} placeholder={`Current ${formData.institutionType} Name`} required />
                  </div>
                </div>

                {formData.institutionType === 'School' ? (
                  <>
                    <div>
                      <label className={labelClasses}>Class (Current)</label>
                      <select name="currentClass" onChange={handleChange} className={inputClasses} required>
                        <option value="">Select Class</option>
                        {[6, 7, 8, 9, 10, 11, 12].map(c => <option key={c} value={c}>{c}th</option>)}
                        <option value="Dropper">Dropper</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Board</label>
                      <select name="board" onChange={handleChange} className={inputClasses} required>
                        <option value="">Select Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">CICSE</option>
                        <option value="WB Board">WBBSE</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className={labelClasses}>Degree Course</label>
                      <input type="text" name="degree" onChange={handleChange} className={inputClasses} placeholder="e.g. B.Sc, B.Tech" required />
                    </div>
                    <div>
                      <label className={labelClasses}>Board</label>
                      <input type="text" name="board" onChange={handleChange} className={inputClasses} placeholder="e.g. Science / WBCHSE" required />
                    </div>
                  </>
                )}

                <div>
                  <label className={labelClasses}>Stream</label>
                  <input type="text" name="stream" onChange={handleChange} className={inputClasses} placeholder="e.g. Science, Commerce" />
                </div>
                <div>
                  <label className={labelClasses}>Target Exam</label>
                  <div className="relative">
                    <Target size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input type="text" name="targetExam" onChange={handleChange} className={`${inputClasses} pl-10`} placeholder="e.g. NEET, JEE" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Course Details */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><BookOpen size={24} className="text-[#c8f000]" /> 3. COURSE DETAILS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>Course Applied For</label>
                  <div className="grid grid-cols-1 gap-3">
                    {['Foundation Course (Class 6 - 9)', 'Board Batches (10 - 12)', 'NEET Preparation (Class 11 - 12)', 'Dropper Batch'].map((course) => (
                      <label key={course} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                        <input type="radio" name="courseApplied" value={course} onChange={handleChange} className="w-4 h-4 accent-[#c8f000]" />
                        <span className="text-sm font-medium">{course}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Preferred Mode of Attending Classes</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Online', 'Offline (Barrackpore)'].map((mode) => (
                      <label key={mode} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                        <input type="radio" name="mode" value={mode} onChange={handleChange} className="w-4 h-4 accent-[#c8f000]" />
                        <span className="text-sm font-medium">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. GUARDIAN'S DETAILS */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><Users size={24} className="text-[#c8f000]" /> 4. GUARDIAN'S DETAILS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className={labelClasses}>Father's Name</label>
                  <input type="text" name="fatherName" onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>Mother's Name</label>
                  <input type="text" name="motherName" onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>Guardian's Name (If Other than Parent)</label>
                  <input
                    type="text"
                    name="guardianOtherName"
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className={labelClasses}>Guardian's Contact Number</label>
                  <div className="flex gap-2">
                    <div className="relative w-1/3">
                      <select
                        name="guardianCountryCode"
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none pr-8 text-xs md:text-sm [&>option]:text-black`}
                        value={formData.guardianCountryCode}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+1">🇨🇦 +1</option>
                        <option value="+65">🇸🇬 +65</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="tel"
                        name="guardianMobile"
                        onChange={handleChange}
                        className={`${inputClasses} pl-10`}
                        placeholder="10-digit number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Occupation</label>
                  <input type="text" name="occupation" onChange={handleChange} className={inputClasses} />
                </div>
                <div className="lg:col-span-2">
                  <label className={labelClasses}>Monthly Income</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['>10,000', '>50,000', '>1L or above'].map(inc => (
                      <label key={inc} className="flex items-center gap-2 text-xs md:text-sm cursor-pointer group">
                        <input type="radio" name="income" value={inc} onChange={handleChange} className="accent-[#c8f000]" />
                        <span className="group-hover:text-[#c8f000] transition-colors">{inc}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Address */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><MapPin size={24} className="text-[#c8f000]" /> 5. ADDRESS</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-3">
                  <label className={labelClasses}>Full Address</label>
                  <textarea name="address" onChange={handleChange} rows="3" className={inputClasses}></textarea>
                </div>
                <div>
                  <label className={labelClasses}>City</label>
                  <div className="relative">
                    <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input type="text" name="city" onChange={handleChange} className={`${inputClasses} pl-10`} required />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>State</label>
                  <input type="text" name="state" onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>PIN Code</label>
                  <input type="text" name="pinCode" onChange={handleChange} className={inputClasses} required />
                </div>
              </div>
            </div>

            {/* 6. Additional Info */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><Info size={24} className="text-[#c8f000]" /> 6. ADDITIONAL INFORMATION</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>How did you hear about us?</label>
                  <select name="source" onChange={handleChange} className={inputClasses}>
                    <option value="">Select Source</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friends">Friends</option>
                    <option value="Google">Google</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Previous Coaching (if any)</label>
                  <input type="text" name="previousCoaching" onChange={handleChange} className={inputClasses} placeholder="Institute name" />
                </div>
              </div>
            </div>

            {/* 7. Declaration */}
            <div className="glass-card p-8">
              <h2 className={sectionTitleClasses}><FileText size={24} className="text-[#c8f000]" /> 7. DECLARATION</h2>
              <div className="space-y-6">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="declaration"
                    onChange={handleChange}
                    className="mt-1.5 w-5 h-5 accent-[#c8f000] rounded"
                    required
                  />
                  <span className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    I hereby declare that all the information provided above is true to the best of my knowledge. I understand that any false information may lead to the cancellation of my admission.
                  </span>
                </label>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-3">
                    <Info size={18} />
                    {error}
                  </div>
                )}

                {success ? (
                  <div className="p-8 bg-[#c8f000]/10 border border-[#c8f000]/20 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle2 size={48} className="text-[#c8f000]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                    <p className="text-white/60 mb-6">Thank you for your interest in Rank Shastra. Our team will review your application and get back to you shortly.</p>
                    <button 
                      type="button"
                      onClick={handleBack}
                      className="text-[#c8f000] font-bold hover:underline"
                    >
                      Return to Admissions
                    </button>
                  </div>
                ) : (
                  <div className="pt-8 border-t border-white/10 flex justify-center md:justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={loading}
                      className={`btn-primary w-full md:w-auto px-12 py-4 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>PROCESSING... <Loader2 size={20} className="animate-spin" /></>
                      ) : (
                        <>SUBMIT APPLICATION <Send size={20} /></>
                      )}
                    </motion.button>
                  </div>
                )}
              </div>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionForm;